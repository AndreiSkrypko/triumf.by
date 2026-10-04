export type SubmitLeadInput = {
  name: string;
  phone: string;
  message?: string;
  source?: string;
};

export async function submitLead(input: SubmitLeadInput) {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("SUBMIT_FAILED");
  }
}
