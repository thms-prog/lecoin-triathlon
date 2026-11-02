import "server-only";

// Envoi du lien de connexion via Resend (RESEND_API_KEY et EMAIL_FROM, déjà sur Vercel).
// Tant que le domaine n'est pas vérifié chez Resend, l'envoi échoue : le coach génère alors
// les liens depuis son espace.
export async function sendLoginEmail(to: string, link: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!key || !from) return false;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `Lecoin-Triathlon <${from}>`,
      to,
      subject: "Ton lien de connexion",
      text: `Bonjour,\n\nPour ouvrir ton espace Lecoin-Triathlon, clique sur ce lien (valable 20 minutes, une seule fois) :\n${link}\n\nSi tu n'as rien demandé, ignore ce message.`,
    }),
  });
  if (!res.ok) console.error("Resend :", res.status, await res.text());
  return res.ok;
}
