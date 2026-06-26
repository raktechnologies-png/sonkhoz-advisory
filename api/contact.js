import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, company, email, phone, service, message } = req.body || {}

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await resend.emails.send({
      from: 'SonKhoz Advisory <onboarding@resend.dev>',
      to: 'mihlesonqwenqwe@gmail.com',
      replyTo: email,
      subject: `New consultation request — ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || '—')}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || '—')}</p>
        <p><strong>Service Required:</strong> ${escapeHtml(service)}</p>
        <p><strong>Project Brief:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend send failed:', err)
    return res.status(502).json({ error: 'Failed to send message' })
  }
}
