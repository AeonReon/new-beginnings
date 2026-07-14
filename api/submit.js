// Conscious Parenting NI — "get listed / partner with us" form handler.
// Receives the form (same-origin, no CORS), then forwards server-to-server to
// the Days Out NI enquiry endpoint tagged kind:"conscious-parenting" — so it
// lands in the Days Out inbox (hello@daysoutni.com) without exposing any email
// on the page. No secrets needed here; Days Out's function does the emailing.

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    let b = req.body;
    if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
    b = b || {};

    // Honeypot — bots fill the hidden "company" field; pretend success, drop it.
    if (String(b.company || '').trim() !== '') {
      res.status(200).json({ message: "Thanks — that's landed with us." });
      return;
    }

    const clip = (v, n) => String(v || '').trim().slice(0, n);
    const payload = {
      kind: 'conscious-parenting',
      name: clip(b.name, 120),
      email: clip(b.email, 160),
      business: clip(b.group || b.business, 160),
      town: clip(b.town, 120),
      website: clip(b.website, 200),
      message: clip(b.message, 4000),
      company: '', // pass the honeypot through clean
    };

    if (!payload.name || !payload.message) {
      res.status(400).json({ error: 'Please add your name and a short message.' });
      return;
    }
    if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email)) {
      res.status(400).json({ error: "That email doesn't look right." });
      return;
    }

    const r = await fetch('https://daysoutni.com/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await r.json().catch(() => ({}));

    if (r.ok) {
      res.status(200).json({ message: data.message || "Thanks — that's landed with us. We'll be in touch soon." });
    } else {
      res.status(502).json({ error: data.error || 'Something went wrong — please try again.' });
    }
  } catch (e) {
    res.status(500).json({ error: 'Something went wrong — please try again.' });
  }
};
