import styled from 'styled-components'
import { graduateImages } from '../data/coursesData'

const GraduateSection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const GraduateContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const GraduateSectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`

const GraduateSectionTitle = styled.h2`
  font-size: 44px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 38px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const GraduateSectionSubtitle = styled.p`
  font-size: 16px;
  color: #d1d5db;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const GalleryCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  group: hover;
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

  @media (max-width: 768px) {
    aspect-ratio: 16/9;
  }
`

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${GalleryCard}:hover & {
    transform: scale(1.08);
  }
`

const GalleryOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(220, 38, 38, 0.8) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${GalleryCard}:hover & {
    opacity: 1;
  }
`

const OverlayLabel = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`

const Message = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 12px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 24px;
  }
`

const MessageText = styled.p`
  font-size: 18px;
  color: #ffffff;
  line-height: 1.8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

function GraduateSuccess() {
  return (
    <GraduateSection>
      <GraduateContainer>
        <GraduateSectionHeader>
          <GraduateSectionTitle>
            From Learners to <span style={{ color: '#fbbf24' }}>Leaders</span>
          </GraduateSectionTitle>
          <GraduateSectionSubtitle>
            Our Graduates Are Building the Future
          </GraduateSectionSubtitle>
        </GraduateSectionHeader>

        <GalleryGrid>
          {graduateImages.map((item, index) => (
            <GalleryCard key={index} style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <GalleryImage
                src={'${import.meta.env.BASE_URL}images/${item.image}'}
                alt={`Graduate - ${item.label}`}
              />
              <GalleryOverlay>
                <OverlayLabel>{item.label}</OverlayLabel>
              </GalleryOverlay>
            </GalleryCard>
          ))}
        </GalleryGrid>

        <Message>
          <MessageText>
            Every achievement begins with the decision to learn. Our graduates carry their skills, confidence, and vision into workplaces, businesses, families, and communities.
          </MessageText>
        </Message>
      </GraduateContainer>
    </GraduateSection>
  )
}

export default GraduateSuccess
