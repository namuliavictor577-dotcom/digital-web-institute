import styled from 'styled-components'
import { coreValues } from '../data/coursesData'

const ValuesSection = styled.section`
  padding: 80px 20px;
  background-color: #f9fafb;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const ValuesContainer = styled.div`
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

const ValuesImage = styled.img`
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

const ValuesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
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

const ValuesHeading = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;
  margin-bottom: 8px;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const ValuesIntro = styled.p`
  font-size: 16px;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
`

const ValuesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const ValueCard = styled.div`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 8px;
  border-left: 4px solid #dc2626;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: fadeUp 0.6s ease-out;

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

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`

const ValueTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 8px;
  margin-top: 0;
`

const ValueDescription = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
`

function CoreValues() {
  return (
    <ValuesSection>
      <ValuesContainer>
        <div>
          <img
            src={'${import.meta.env.BASE_URL}images/home-page-5.jpg'}
            alt="Institute staff and instructors working together in professional environment"
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

        <ValuesContent>
          <div>
            <ValuesHeading>What <span style={{ color: '#dc2626' }}>Guides Us</span></ValuesHeading>
            <ValuesIntro>
              Our core values shape every decision we make and every interaction we have with our learners and community.
            </ValuesIntro>
          </div>

          <ValuesList>
            {coreValues.map((value, index) => (
              <ValueCard key={index} style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesList>
        </ValuesContent>
      </ValuesContainer>
    </ValuesSection>
  )
}

export default CoreValues
