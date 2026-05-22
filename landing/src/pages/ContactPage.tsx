import { type FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { PageShell } from '../components/PageShell';
import { SITE } from '../constants/site';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('general');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Healit — ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <PageShell
      title="Contact us"
      description="Questions about orders, partnerships, privacy, or the app? We're here to help.">
      <div className="contact-grid">
        <div className="contact-card">
          <h2>Get in touch</h2>
          <p>
            Reach our team for support, feedback, or business inquiries. We typically respond within
            one to two business days.
          </p>
          <dl className="contact-list">
            <div>
              <dt>General</dt>
              <dd>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </dd>
            </div>
            <div>
              <dt>Support</dt>
              <dd>
                <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
              </dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>Monday – Saturday, 9:00 AM – 7:00 PM IST</dd>
            </div>
          </dl>
          <p className="contact-card__note">
            See also our <Link to="/privacy">Privacy Policy</Link> and{' '}
            <Link to="/terms">Terms &amp; Conditions</Link>.
          </p>
        </div>

        <div className="contact-card">
          <h2>Send a message</h2>
          <p>Fill out the form and your email app will open with your message ready to send.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Topic
              <select name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
                <option value="general">General inquiry</option>
                <option value="order">Order &amp; delivery</option>
                <option value="account">Account &amp; app</option>
                <option value="privacy">Privacy &amp; data</option>
                <option value="partnership">Pharmacy / partnership</option>
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
              />
            </label>
            <button type="submit" className="btn btn--primary">
              Open email to send
            </button>
          </form>
        </div>
      </div>
    </PageShell>
  );
}
