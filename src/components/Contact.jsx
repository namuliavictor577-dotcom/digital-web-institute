import { useState } from 'react'
import styled from 'styled-components'

const ContactSection = styled.section`
  id: "contact",
  padding: 80px 20px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`

const ContactTitle = styled.h2`
  font-size: 44px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 38px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const ContactSubtitle = styled.p`
  font-size: 18px;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const LocationInfo = styled.div`
  background-color: #f9fafb;
  padding: 30px;
  border-radius: 8px;
  border-left: 4px solid #dc2626;

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 12px 0;
  }

  p {
    margin: 0;
    color: #374151;
    line-height: 1.8;
    font-size: 15px;
  }
`

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const DetailItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;

  .icon {
    font-size: 24px;
    flex-shrink: 0;
    margin-top: 4px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .label {
      font-size: 13px;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    .value {
      font-size: 16px;
      font-weight: 600;
      color: #0f172a;
    }
  }
`

const SocialButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
`

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  background-color: #0f172a;
  color: #ffffff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #1e293b;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #dc2626;
    outline-offset: 2px;
  }

  &.disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
    opacity: 0.6;

    &:hover {
      transform: none;
      background-color: #d1d5db;
    }
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
`

const FormInput = styled.input`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`

const FormTextarea = styled.textarea`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`

const FormSelect = styled.select`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  background-color: #ffffff;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`

const SubmitButton = styled.button`
  background-color: #dc2626;
  color: #ffffff;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #b91c1c;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid #fbbf24;
    outline-offset: 2px;
  }
`

const SuccessMessage = styled.div`
  background-color: #dcfce7;
  border: 1px solid #86efac;
  color: #15803d;
  padding: 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.phone && formData.email) {
      setSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: '',
        message: ''
      })
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactHeader>
          <ContactTitle>Get in <span style={{ color: '#dc2626' }}>Touch</span></ContactTitle>
          <ContactSubtitle>
            Ready to start your digital transformation? Reach out to us today.
          </ContactSubtitle>
        </ContactHeader>

        <ContactContent>
          <ContactInfo>
            <LocationInfo>
              <h3>📍 Our Location</h3>
              <p>
                Digital Web Institute<br />
                Embu County, Manyatta Constituency, Kenya<br />
                Approximately 50 metres from the Embu–Meru Highway
              </p>
            </LocationInfo>

            <ContactDetails>
              <DetailItem>
                <div className="icon">📞</div>
                <div className="content">
                  <span className="label">Phone</span>
                  <a href="tel:+254141415944" style={{ color: '#dc2626', fontWeight: '600' }}>
                    +254 141 415 944
                  </a>
                </div>
              </DetailItem>

              <DetailItem>
                <div className="icon">💬</div>
                <div className="content">
                  <span className="label">WhatsApp</span>
                  <a href="https://wa.me/254141415944" target="_blank" rel="noopener noreferrer" style={{ color: '#dc2626', fontWeight: '600' }}>
                    Chat with us on WhatsApp
                  </a>
                </div>
              </DetailItem>

              <DetailItem>
                <div className="icon">🕐</div>
                <div className="content">
                  <span className="label">Business Hours</span>
                  <span className="value">Monday - Friday: 8:00 AM - 5:00 PM</span>
                </div>
              </DetailItem>
            </ContactDetails>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0f172a', marginBottom: '16px' }}>
                Follow Us
              </h3>
              <SocialButtons>
                <SocialButton 
                  href="https://www.facebook.com/victorwebservices" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  f Facebook
                </SocialButton>
                <SocialButton 
                  href="https://wa.me/254141415944" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  💚 WhatsApp
                </SocialButton>
                <SocialButton className="disabled">
                  📷 Instagram (Coming soon)
                </SocialButton>
                <SocialButton className="disabled">
                  𝕏 Twitter (Coming soon)
                </SocialButton>
              </SocialButtons>
            </div>
          </ContactInfo>

          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '24px' }}>
              Send us an Enquiry
            </h3>
            
            {submitted && (
              <SuccessMessage>
                ✓ Thank you! We've received your enquiry and will get back to you soon.
              </SuccessMessage>
            )}

            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Full Name *</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="phone">Phone Number *</FormLabel>
                <FormInput
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="email">Email Address *</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="course">Course of Interest</FormLabel>
                <FormSelect
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="">-- Select a course --</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="software-engineering">Software Engineering with AI</option>
                  <option value="full-stack-ai">Full-Stack Artificial Intelligence</option>
                  <option value="cybersecurity">Advanced Cybersecurity</option>
                  <option value="mobile-app">Mobile App Development with AI</option>
                  <option value="web-dev">Web Development Bootcamp</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="freelancing">Freelancing</option>
                  <option value="ai-tools">AI Tool Optimization</option>
                  <option value="game-dev">Game Development Bootcamp</option>
                </FormSelect>
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about yourself and your learning goals..."
                />
              </FormGroup>

              <SubmitButton type="submit">
                Send Enquiry
              </SubmitButton>
            </ContactForm>
          </div>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact
