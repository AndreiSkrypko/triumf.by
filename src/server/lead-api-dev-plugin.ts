import type { IncomingMessage, ServerResponse } from "node:http";
import type { Plugin } from "vite";
import { sendLeadToTelegram } from "./send-lead";

async function readJsonBody(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

export function leadApiDevPlugin(): Plugin {
  return {
    name: "lead-api-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== "/api/lead" || req.method !== "POST") {
          next();
          return;
        }

        const response = res as ServerResponse;
        try {
          const body = (await readJsonBody(req)) as Record<string, unknown>;
          await sendLeadToTelegram({
            name: String(body.name ?? ""),
            phone: String(body.phone ?? ""),
            message: body.message != null ? String(body.message) : undefined,
            source: body.source != null ? String(body.source) : undefined,
          });
          response.statusCode = 200;
          response.setHeader("Content-Type", "application/json");
          response.end(JSON.stringify({ ok: true }));
        } catch (error) {
          console.error(error);
          response.statusCode = 500;
          response.setHeader("Content-Type", "application/json");
          response.end(JSON.stringify({ ok: false, error: "send_failed" }));
        }
      });
    },
  };
}
