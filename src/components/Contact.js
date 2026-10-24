import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="content-page">
      <section className="page-hero contact-hero">
        <p className="eyebrow">We’d love to hear from you</p>
        <h1>Questions, ideas, or just saying <span>hello?</span></h1>
        <p>
          Send a note using the form below. This demo form does not send
          messages to a support team yet.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Get in touch</p>
          <h2>How can we help?</h2>
          <p>
            Share feedback about the app, tell us what you’d like to see next,
            or let us know what’s on your mind.
          </p>
          <div className="contact-note">
            <span aria-hidden="true">✉</span>
            <div>
              <strong>Prefer email?</strong>
              <p>
                <a href="mailto:hello@namastefoods.example">
                  hello@namastefoods.example
                </a>
              </p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="e.g. Sam"
            autoComplete="name"
            required
          />

          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <label htmlFor="contact-message">Your message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Tell us how we can help..."
            required
          />

          <button className="primary-button" type="submit">Send message</button>
          {submitted && (
            <p className="form-notice" role="status">
              Thanks for reaching out. This demo form does not send messages yet.
            </p>
          )}
        </form>
      </section>
    </main>
  );
};

export default Contact;
