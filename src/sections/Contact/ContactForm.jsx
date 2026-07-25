import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { fadeUp } from '../../animations/index.js';
import { sendContactMessage } from '../../services/contactService.js';
import Button from '../../components/ui/Button.jsx';
import GlassCard from '../../components/ui/GlassCard.jsx';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setStatus('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    const response = await sendContactMessage(form);
    setIsSubmitting(false);

    if (response.ok) {
      setStatus(response.message);
      setForm(initialForm);
    }
  };

  return (
    <motion.div variants={fadeUp}>
      <GlassCard className="contact-form-card">
        <div>
          <span className="contact-kicker">Message</span>
          <h3>Send a professional inquiry</h3>
          <p>Use this form for roles, freelance projects, collaborations, or AI project discussions.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <FormField
            id="contact-name"
            label="Name"
            value={form.name}
            error={errors.name}
            onChange={(value) => updateField('name', value)}
          />
          <FormField
            id="contact-email"
            label="Email"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={(value) => updateField('email', value)}
          />
          <FormField
            id="contact-subject"
            label="Subject"
            value={form.subject}
            error={errors.subject}
            onChange={(value) => updateField('subject', value)}
          />
          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
              rows="6"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
            />
            {errors.message && (
              <span id="contact-message-error" className="form-error">
                {errors.message}
              </span>
            )}
          </div>

          {status && (
            <p className="form-success" role="status">
              {status}
            </p>
          )}

          <Button type="submit" variant="primary" disabled={isSubmitting}>
            <FiSend aria-hidden="true" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </GlassCard>
    </motion.div>
  );
}

function FormField({ id, label, type = 'text', value, error, onChange }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <span id={`${id}-error`} className="form-error">
          {error}
        </span>
      )}
    </div>
  );
}

function validateForm(form) {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) errors.email = 'Email is required.';
  else if (!emailPattern.test(form.email)) errors.email = 'Enter a valid email address.';
  if (!form.subject.trim()) errors.subject = 'Subject is required.';
  if (!form.message.trim()) errors.message = 'Message is required.';
  else if (form.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';
  else if (form.message.trim().length > 800) errors.message = 'Message must be under 800 characters.';

  return errors;
}

export default ContactForm;
