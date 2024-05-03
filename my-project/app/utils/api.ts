export interface UserProps {
  city: string;
  createdAt: string;
  email: string;
  github: string;
  group: string;
  language: string;
  linkedin: string;
  motive: string;
  name: string;
  phone: string;
  resume: string;
  telegram: string;
  type: string;
}

export async function sendUserToTelegramBot(data: {
  [p: string]: any;
  createdAt: string;
}) {
  const res = await fetch("api/tlg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
