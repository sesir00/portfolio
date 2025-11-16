import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_f00qyvo',
        'template_bl4ihcd',
        form.current,
        'NR6OUO-dR9yn07sPY'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          e.target.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message. Please try again.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contactform" className="py-20 px-5 font-poppins">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent pb-2">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 md:p-10">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name Field */}
            <div className="form-group">
              <label 
                htmlFor="user_name" 
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label 
                htmlFor="user_email" 
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
              />
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-10 pt-8 border-t border-zinc-800">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white text-sm">shishir.chapagain.999@gmail.com</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white text-sm">Kathmandu, Nepal</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">Response Time</p>
                <p className="text-white text-sm">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;