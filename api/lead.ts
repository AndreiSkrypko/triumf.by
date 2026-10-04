import { sendLeadToTelegram } from "../src/server/send-lead";

type VercelRequest = {
  method?: string;
  body?: unknown;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body as Record<string, unknown>);
    const name = String(body?.name ?? "");
    const phone = String(body?.phone ?? "");
    const message = body?.message != null ? String(body.message) : undefined;
    const source = body?.source != null ? String(body.source) : undefined;

    await sendLeadToTelegram({ name, phone, message, source });
    return res.status(200).json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_PAYLOAD") {
      return res.status(400).json({ ok: false, error: "invalid_payload" });
    }
    console.error(error);
    return res.status(500).json({ ok: false, error: "send_failed" });
  }
}
