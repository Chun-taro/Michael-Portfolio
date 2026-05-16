import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:michaelangeloangeles0@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoUrl;
    setIsComposeOpen(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">04.</span> What's Next?</h2>
        
        <div className="contact-content glass-panel">
          <h3 className="contact-heading">Get In Touch</h3>
          <p className="contact-desc">
            I'm currently looking for new opportunities to learn and grow as a developer. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-info">
            <div className="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>michaelangeloangeles0@gmail.com</span>
            </div>
            
            <div className="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>0997-792-4534</span>
            </div>
          </div>
          
          <button 
            onClick={() => setIsComposeOpen(true)} 
            className="btn btn-primary contact-btn"
          >
            Say Hello
          </button>
          
          <div className="social-links">
            <a href="https://github.com/Chun-taro" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Gmail-style Compose Modal */}
      {isComposeOpen && (
        <div className="gmail-modal-overlay">
          <div className="gmail-compose-window">
            <div className="gmail-header">
              <span>New Message</span>
              <div className="header-actions">
                <button className="header-btn" onClick={() => setIsComposeOpen(false)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSend} className="gmail-body">
              <div className="gmail-input-group">
                <span className="input-label">To</span>
                <input type="text" value="michaelangeloangeles0@gmail.com" readOnly />
              </div>
              <div className="gmail-input-group">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="gmail-message-area">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="gmail-footer">
                <button type="submit" className="gmail-send-btn">Send</button>
                <div className="gmail-formatting-icons">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5f6368" strokeWidth="2"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5f6368" strokeWidth="2"><path d="M6 12h12M6 8h12M6 16h12"/></svg>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
