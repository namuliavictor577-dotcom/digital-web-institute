import styled from 'styled-components'
import { coursesData } from '../data/coursesData'

const CoursesSection = styled.section`
  id: "courses",
  padding: 80px 20px;
  background-color: #f9fafb;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const CoursesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`

const SectionTitle = styled.h2`
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

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  margin-bottom: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

const CourseCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
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
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
`

const CourseImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

const CourseCardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`

const CourseMeta = styled.div`
  display: flex;
  gap: 12px;
  font-size: 12px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
`

const CourseBadge = styled.span`
  background-color: #dcfce7;
  color: #15803d;
  padding: 4px 8px;
  border-radius: 4px;
`

const CourseTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  line-height: 1.4;
`

const CourseDescription = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
  flex: 1;
`

const CourseDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e5e7eb;
  padding-top: 16px;
  margin-top: 12px;
  font-size: 13px;
  color: #374151;
`

const CourseDuration = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`

const CourseFee = styled.span`
  font-weight: 700;
  color: #dc2626;
`

const ViewDetailsButton = styled.button`
  background-color: #0f172a;
  color: #ffffff;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #1e293b;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid #dc2626;
    outline-offset: 2px;
  }
`

const ViewMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

const ViewMoreButton = styled.button`
  background-color: #dc2626;
  color: #ffffff;
  padding: 14px 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

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
    width: 100%;
    padding: 12px 32px;
  }
`

function Courses({ onCourseSelect, onViewMore }) {
  return (
    <CoursesSection id="courses">
      <CoursesContainer>
        <SectionHeader>
          <SectionTitle>Skills for the <span style={{ color: '#dc2626' }}>Digital Future</span></SectionTitle>
          <SectionSubtitle>
            Designed for career growth, entrepreneurship, freelancing, innovation, and practical employability.
          </SectionSubtitle>
        </SectionHeader>

        <CourseGrid>
          {coursesData.featured.map((course, index) => (
            <CourseCard key={course.id} style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <CourseImage 
                src={course.image} 
                alt={`${course.title} course`}
              />
              <CourseCardContent>
                <CourseMeta>
                  <CourseBadge>{course.level}</CourseBadge>
                  <span>{course.duration}</span>
                </CourseMeta>

                <CourseTitle>{course.title}</CourseTitle>
                <CourseDescription>{course.shortDescription}</CourseDescription>

                <CourseDetails>
                  <CourseDuration>⏱️ {course.duration}</CourseDuration>
                  <CourseFee>KSh {course.fee.toLocaleString()}</CourseFee>
                </CourseDetails>

                <ViewDetailsButton onClick={() => onCourseSelect(course)}>
                  View Course Details
                </ViewDetailsButton>
              </CourseCardContent>
            </CourseCard>
          ))}
        </CourseGrid>

        <ViewMoreContainer>
          <ViewMoreButton onClick={onViewMore}>
            View More Courses
          </ViewMoreButton>
        </ViewMoreContainer>
      </CoursesContainer>
    </CoursesSection>
  )
}

export default Courses
