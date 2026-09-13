import styled from 'styled-components'

const HeroSection = styled.section`
  id: "home",
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 70vh;
  }
`

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 20px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    gap: 30px;
  }
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`

const HeroQuote = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
  
  @media (max-width: 1024px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`

const HeroSubtitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #fbbf24;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const HeroSupportText = styled.p`
  font-size: 16px;
  color: #d1d5db;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const PrimaryButton = styled.button`
  background-color: #dc2626;
  color: #ffffff;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  white-space: nowrap;

  &:hover {
    background-color: #b91c1c;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(220, 38, 38, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #fbbf24;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 15px;
  }
`

const SecondaryButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #ffffff;
  border-radius: 6px;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  white-space: nowrap;

  &:hover {
    background-color: #ffffff;
    color: #0f172a;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #fbbf24;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 15px;
  }
`

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  aspect-ratio: 4/5;
  animation: fadeUp 0.8s ease-out;

  @media (max-width: 1024px) {
    aspect-ratio: 16/9;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const HeroImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%);
    z-index: 1;
    pointer-events: none;
  }
`

function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroText>
          <HeroQuote>
            The future belongs to those who learn, adapt, and create today. At Digital Web Institute, every skill you gain is a step toward transforming your life, your community, and the world.
          </HeroQuote>
          <HeroSubtitle>
            Learn today. Build tomorrow. Transform your future.
          </HeroSubtitle>
          <HeroSupportText>
            Practical digital skills for employment, entrepreneurship, innovation, and lifelong growth.
          </HeroSupportText>
          <ButtonContainer>
            <PrimaryButton onClick={() => handleScroll('courses')}>
              Explore Courses
            </PrimaryButton>
            <SecondaryButton onClick={() => handleScroll('contact')}>
              Start Your Journey
            </SecondaryButton>
          </ButtonContainer>
        </HeroText>

        <HeroImageContainer>
          <HeroImage
            src={'${import.meta.env.BASE_URL}images/home-page-2.jpg'}
            alt="African student focused on laptop in modern computer lab"
          />
        </HeroImageContainer>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero
