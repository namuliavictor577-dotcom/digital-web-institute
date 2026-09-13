import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #0f172a;
  color: #ffffff;
  padding: 60px 20px 24px;

  @media (max-width: 768px) {
    padding: 40px 20px 16px;
  }
`

const FooterContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FooterTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const FooterText = styled.p`
  font-size: 14px;
  color: #d1d5db;
  margin: 0;
  line-height: 1.6;
`

const FooterLink = styled.a`
  font-size: 14px;
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
  display: inline-block;

  &:hover {
    color: #fbbf24;
  }

  &:focus-visible {
    outline: 2px solid #dc2626;
    outline-offset: 2px;
  }
`

const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0 auto;
`

const FooterBottom = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`

const CopyrightText = styled.p`
  font-size: 13px;
  color: #9ca3af;
  margin: 0;
`

const FooterSocialButtons = styled.div`
  display: flex;
  gap: 12px;
`

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #dc2626;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #fbbf24;
    outline-offset: 2px;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: none;
    }
  }
`

function Footer() {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <FooterTitle>Digital Web Institute</FooterTitle>
          <FooterText>
            Empowering learners with practical digital skills for employment, entrepreneurship, and community impact since 2002.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink onClick={(e) => handleSmoothScroll(e, 'home')}>Home</FooterLink>
          <FooterLink onClick={(e) => handleSmoothScroll(e, 'about')}>About Us</FooterLink>
          <FooterLink onClick={(e) => handleSmoothScroll(e, 'courses')}>Courses</FooterLink>
          <FooterLink onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact Us</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Location</FooterTitle>
          <FooterText>
            Embu County, Manyatta Constituency<br />
            Approximately 50m from Embu–Meru Highway<br />
            Kenya
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Connect With Us</FooterTitle>
          <FooterLink href="tel:+254141415944">
            📞 +254 141 415 944
          </FooterLink>
          <FooterLink href="https://wa.me/254141415944" target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </FooterLink>
          <FooterLink href="https://www.facebook.com/victorwebservices" target="_blank" rel="noopener noreferrer">
            f Facebook
          </FooterLink>
        </FooterSection>
      </FooterContainer>

      <FooterDivider />

      <FooterBottom>
        <CopyrightText>
          © {new Date().getFullYear()} Digital Web Institute. All rights reserved.
        </CopyrightText>
        <FooterSocialButtons>
          <SocialLink 
            href="https://www.facebook.com/victorwebservices" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            f
          </SocialLink>
          <SocialLink 
            href="https://wa.me/254141415944" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            💚
          </SocialLink>
          <SocialLink className="disabled" aria-label="Instagram (Coming soon)">
            📷
          </SocialLink>
          <SocialLink className="disabled" aria-label="Twitter (Coming soon)">
            𝕏
          </SocialLink>
        </FooterSocialButtons>
      </FooterBottom>
    </FooterWrapper>
  )
}

export default Footer
