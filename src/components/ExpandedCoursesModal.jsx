import styled from 'styled-components'
import { coursesData } from '../data/coursesData'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const ModalContent = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  max-width: 1200px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.4s ease;

  @keyframes slideUp {
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

const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  padding: 30px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const ModalTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: #0f172a;
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid #dc2626;
    outline-offset: 2px;
    border-radius: 4px;
  }
`

const ModalBody = styled.div`
  padding: 40px 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`

const CourseCard = styled.div`
  background-color: #f9fafb;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
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
    border-color: #dc2626;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`

const CourseImage = styled.img`
  width: 100%;
  height: 200px;
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
  flex-wrap: wrap;
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
  border-top: 1px solid #d1d5db;
  padding-top: 12px;
  margin-top: 12px;
  font-size: 13px;
  color: #374151;
  flex-wrap: wrap;
  gap: 8px;
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
  background-color: #dc2626;
  color: #ffffff;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  margin-top: 12px;

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

function ExpandedCoursesModal({ onClose, onCourseSelect }) {
  const allCourses = [
    ...coursesData.featured,
    ...coursesData.additional
  ]

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>All Courses</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close modal">
            ×
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <CourseGrid>
            {allCourses.map((course, index) => (
              <CourseCard key={course.id} style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <CourseImage
                  src={`${import.meta.env.BASE_URL}images${course.image}`}
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

                  <ViewDetailsButton onClick={() => {
                    onCourseSelect(course)
                    onClose()
                  }}>
                    View Details
                  </ViewDetailsButton>
                </CourseCardContent>
              </CourseCard>
            ))}
          </CourseGrid>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  )
}

export default ExpandedCoursesModal
