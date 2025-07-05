import React, { useState } from 'react';
import './ContactForm.css';

interface FormState {
  name: string;
  email: string;
  mobile: string;
  authorize: boolean;
}

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    mobile: '',
    authorize: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 TODO: replace with real submit logic
    console.table(form);
  };

  return (
    <section className="talk-to-us-section">
      <h2 className="section-title">Talk To Us</h2>

      <form className="hubspot-form" onSubmit={handleSubmit}>
        {/* Your Name */}
        <div className="form-group">
          <label htmlFor="name">
            Your Name<span className="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* Work Email */}
        <div className="form-group">
          <label htmlFor="email">
            Work Email <span className="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* Mobile */}
        <div className="form-group">
          <label htmlFor="mobile">
            Mobile<span className="required">*</span>
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            value={form.mobile}
            onChange={handleChange}
          />
        </div>

        {/* Checkbox */}
        <div className="form-check">
          <input
            id="authorize"
            name="authorize"
            type="checkbox"
            checked={form.authorize}
            onChange={handleChange}
            required
          />
          <label htmlFor="authorize" className="checkbox-label">
            I authorize&nbsp;Harappa&nbsp;to&nbsp;contact&nbsp;me
            <span className="required">*</span>
          </label>
        </div>

        {/* CTA */}
        <button type="submit" className="submit-btn">
          Schedule A Meeting
        </button>
      </form>

      {/* HubSpot credit line */}
      <p className="hubspot-note">
        {/* swap the src below with an svg/asset in your project if desired */}
        <img src="https://avatars.githubusercontent.com/u/326419?s=280&v=4" alt="" />
        <span>
          <a
            href="https://www.hubspot.com/products/marketing/forms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create your own free forms
          </a>
          to generate leads from your website.
        </span>
      </p>
    </section>
  );
};

export default ContactForm;
