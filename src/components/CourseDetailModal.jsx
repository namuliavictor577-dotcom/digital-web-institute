import { useState } from 'react'
import styled from 'styled-components'

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
  max-width: 900px;
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

  @media (max-width: 768px) {
    border-radius: 12px;
  }
`

const ModalHeader = styled.div`
  position: relative;
  height: 300px;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%);
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #0f172a;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    background-color: #ffffff;
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid #dc2626;
    outline-offset: 2px;
  }
`

const ModalBody = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    padding: 24px;
    gap: 24px;
  }
`

const CourseTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const CourseMeta = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    gap: 16px;
  }
`

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const MetaLabel = styled.span`
  font-size: 12px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
`

const MetaValue = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;

  &.fee {
    color: #dc2626;
    font-size: 20px;
  }
`

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
`

const SectionText = styled.p`
  font-size: 15px;
  color: #374151;
  line-height: 1.7;
  margin: 0;
`

const TopicsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TopicItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #374151;

  &::before {
    content: '✓';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: #dcfce7;
    color: #15803d;
    border-radius: 50%;
    font-weight: 700;
    font-size: 14px;
    flex-shrink: 0;
  }
`

const ProjectsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ProjectItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #374151;

  &::before {
    content: '→';
    color: #dc2626;
    font-size: 18px;
    font-weight: 700;
    flex-shrink: 0;
  }
`

const FormContainer = styled.div`
  background-color: #f9fafb;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`

const FormTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 20px;
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  grid-column: ${props => props.fullWidth ? '1 / -1' : 'auto'};
`

const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
`

const FormInput = styled.input`
  padding: 10px 12px;
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
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ApplyButton = styled.button`
  background-color: #dc2626;
  color: #ffffff;
  padding: 12px 32px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

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

function CourseDetailModal({ course, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
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
      setTimeout(() => {
        onClose()
      }, 2000)
    }
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader style={{ backgroundImage: `url(${course.image})` }}>
          <CloseButton onClick={onClose} aria-label="Close modal">
            ×
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <div>
            <CourseTitle>{course.title}</CourseTitle>

            <CourseMeta>
              <MetaItem>
                <MetaLabel>Level</MetaLabel>
                <MetaValue>{course.level}</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaLabel>Duration</MetaLabel>
                <MetaValue>{course.duration}</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaLabel>Course Fee</MetaLabel>
                <MetaValue className="fee">KSh {course.fee.toLocaleString()}</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaLabel>Format</MetaLabel>
                <MetaValue>{course.format}</MetaValue>
              </MetaItem>
            </CourseMeta>
          </div>

          <div>
            <SectionTitle>Course Overview</SectionTitle>
            <SectionText>{course.description}</SectionText>
          </div>

          <div>
            <SectionTitle>Who Is This Course For?</SectionTitle>
            <SectionText>{course.forWho}</SectionText>
          </div>

          <div>
            <SectionTitle>Main Topics & Modules</SectionTitle>
            <TopicsList>
              {course.topics.map((topic, index) => (
                <TopicItem key={index}>{topic}</TopicItem>
              ))}
            </TopicsList>
          </div>

          <div>
            <SectionTitle>Practical Projects & Outcomes</SectionTitle>
            <ProjectsList>
              {course.projects.map((project, index) => (
                <ProjectItem key={index}>{project}</ProjectItem>
              ))}
            </ProjectsList>
          </div>

          <div>
            <SectionTitle>Entry Requirements</SectionTitle>
            <SectionText>{course.requirements}</SectionText>
          </div>

          <FormContainer>
            <FormTitle>Apply for This Course</FormTitle>
            
            {submitted ? (
              <SuccessMessage>
                ✓ Thank you! We'll contact you soon with enrollment details.
              </SuccessMessage>
            ) : (
              <form onSubmit={handleSubmit}>
                <FormGrid>
                  <FormField>
                    <FormLabel htmlFor="name">Full Name *</FormLabel>
                    <FormInput
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </FormField>

                  <FormField>
                    <FormLabel htmlFor="phone">Phone Number *</FormLabel>
                    <FormInput
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </FormField>

                  <FormField>
                    <FormLabel htmlFor="email">Email Address *</FormLabel>
                    <FormInput
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormField>

                  <FormField fullWidth>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormTextarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your learning goals..."
                    />
                  </FormField>
                </FormGrid>

                <ButtonContainer>
                  <ApplyButton type="submit">Apply Now</ApplyButton>
                </ButtonContainer>
              </form>
            )}
          </FormContainer>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  )
}

export default CourseDetailModal
