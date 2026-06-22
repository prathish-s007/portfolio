import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiGithub, FiLinkedin, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setIsError(false);

    // Retrieve EmailJS keys from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const isConfigured = 
      serviceId && 
      templateId && 
      publicKey && 
      serviceId !== 'your_service_id_here' && 
      templateId !== 'your_template_id_here' && 
      publicKey !== 'your_public_key_here';

    if (isConfigured) {
      // Direct EmailJS send action
      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(
          () => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsSuccess(false), 5000);
          },
          (error) => {
            console.error('EmailJS Error:', error);
            setIsSubmitting(false);
            setIsError(true);
          }
        );
    } else {
      // Local simulation fallback if environment variables are not yet setup
      console.warn('EmailJS environment keys not configured or using placeholders. Falling back to local submission simulation.');
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Start A Conversation" 
          align="center" 
        />

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6 items-stretch">
          
          {/* Left Column: Contact info & socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-text-main">
                Let's construct something <span className="text-gradient-purple">extraordinary</span> together.
              </h3>
              <p className="text-text-muted text-base md:text-lg font-sans leading-relaxed">
                Whether you have a full-stack software opportunity, a hackathon project idea, or simply want to connect, feel free to drop a message!
              </p>
            </div>

            {/* Info Cards list */}
            <div className="flex flex-col gap-4 my-6">
              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl glass border-border-main">
                <div className="h-10 w-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <FiMail size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-text-muted uppercase font-semibold font-sans tracking-wider">Email Me</div>
                  <a href={`mailto:${personalInfo.socials.email}`} className="text-text-main hover:text-brand-primary transition-colors text-sm md:text-base font-sans font-medium">
                    {personalInfo.socials.email}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl glass border-border-main">
                <div className="h-10 w-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-text-muted uppercase font-semibold font-sans tracking-wider">Location</div>
                  <div className="text-text-main text-sm md:text-base font-sans font-medium">
                    Krishnagiri, Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles links */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-card-dark text-text-muted hover:text-brand-primary rounded-xl border border-border-main shadow-sm hover:shadow-brand-primary/10 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-card-dark text-text-muted hover:text-brand-primary rounded-xl border border-border-main shadow-sm hover:shadow-brand-primary/10 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphic Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass p-8 rounded-2xl relative h-full flex flex-col justify-center border border-border-main">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    ref={formRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    noValidate
                  >
                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-text-main font-sans">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input-field font-sans ${errors.name ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                        placeholder="John Doe"
                        required
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs font-sans font-medium">{errors.name}</span>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-text-main font-sans">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input-field font-sans ${errors.email ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                        placeholder="john@example.com"
                        required
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs font-sans font-medium">{errors.email}</span>
                      )}
                    </div>

                    {/* Message Textarea */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-medium text-text-main font-sans">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`input-field font-sans resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                        placeholder="Hi Prathish, I would love to connect about..."
                        required
                      />
                      {errors.message && (
                        <span className="text-red-500 text-xs font-sans font-medium">{errors.message}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full mt-2"
                      icon={FiSend}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>

                    {/* Error Indicator */}
                    {isError && (
                      <div className="flex items-center gap-2 text-red-500 text-sm font-sans mt-2">
                        <FiAlertCircle />
                        <span>Failed to send email. Please try again or email directly.</span>
                      </div>
                    )}
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center p-8 gap-4"
                  >
                    <div className="text-brand-primary animate-pulse">
                      <FiCheckCircle size={64} />
                    </div>
                    <h4 className="text-2xl font-bold font-display text-text-main">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-text-muted font-sans max-w-sm">
                      Thank you for reaching out. Your message has been sent. I will get back to you as soon as possible.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSuccess(false)}
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
