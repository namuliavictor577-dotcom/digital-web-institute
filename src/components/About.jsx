import styled from 'styled-components'

const AboutSection = styled.section`
  id: "about",
  padding: 80px 20px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const AboutContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  aspect-ratio: 4/5;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: fadeUpLeft 0.8s ease-out;

  @media (max-width: 768px) {
    aspect-ratio: 16/9;
  }

  @keyframes fadeUpLeft {
    from {
      opacity: 0;
      transform: translateY(20px) translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
  }
`

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: fadeUpRight 0.8s ease-out;

  @keyframes fadeUpRight {
    from {
      opacity: 0;
      transform: translateY(20px) translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
  }
`

const AboutTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  span {
    color: #dc2626;
  }
`

const AboutParagraph = styled.p`
  font-size: 16px;
  color: #374151;
  line-height: 1.8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const LocationBox = styled.div`
  background-color: #f9fafb;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #dc2626;
  margin: 16px 0;
`

const LocationTitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  font-weight: 600;
`

const LocationText = styled.p`
  font-size: 18px;
  color: #0f172a;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const TrustIndicators = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Indicator = styled.div`
  background-color: #f0fdf4;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #dcfce7;

  .label {
    font-size: 13px;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
    font-weight: 600;
  }

  .value {
    font-size: 20px;
    font-weight: 700;
    color: #15803d;
  }
`

const LearnMoreButton = styled.button`
  align-self: flex-start;
  background-color: #0f172a;
  color: #ffffff;
  padding: 12px 28px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #1e293b;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid #dc2626;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    align-self: auto;
    width: 100%;
  }
`

function About() {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <div>
          <img
            src="/complab 1.jpg"
            alt="Diverse African students learning together in computer laboratory"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              objectFit: 'cover',
              aspectRatio: '4/5',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>

        <AboutContent>
          <div>
            <AboutTitle>
              About <span>Digital Web Institute</span>
            </AboutTitle>
            
            <AboutParagraph>
              For more than two decades, Digital Web Institute has believed that education is most powerful when it creates opportunity. What began in 2002 as a commitment to practical digital learning has grown into a community of learners, mentors, creators, and entrepreneurs.
            </AboutParagraph>

            <AboutParagraph>
              From our home in Embu County, we help people discover their potential, gain relevant skills, and approach the future with confidence. Our graduates do more than look for jobs; they create solutions, serve their communities, build businesses, and inspire others to learn.
            </AboutParagraph>

            <AboutParagraph>
              Every learner who walks through our doors becomes part of a continuing story of growth, resilience, and transformation.
            </AboutParagraph>

            <LocationBox>
              <LocationTitle>Our Location</LocationTitle>
              <LocationText>
                Embu County, Manyatta Constituency — 50 metres from the Embu–Meru Highway, Kenya
              </LocationText>
            </LocationBox>

            <TrustIndicators>
              <Indicator>
                <div className="label">Established</div>
                <div className="value">2002</div>
              </Indicator>
              <Indicator>
                <div className="label">Focus</div>
                <div className="value">Community</div>
              </Indicator>
              <Indicator>
                <div className="label">Skills</div>
                <div className="value">Practical</div>
              </Indicator>
            </TrustIndicators>

            <LearnMoreButton>
              Learn More About Us
            </LearnMoreButton>
          </div>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  )
}

export default About
