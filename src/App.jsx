import { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import GraduateSuccess from './components/GraduateSuccess'
import CoreValues from './components/CoreValues'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CourseDetailModal from './components/CourseDetailModal'
import ExpandedCoursesModal from './components/ExpandedCoursesModal'
import WhatsAppButton from './components/WhatsAppButton'

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
`

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showExpandedCourses, setShowExpandedCourses] = useState(false)

  return (
    <AppContainer>
      <Header />
      <main>
        <Hero />
        <About />
        <Courses 
          onCourseSelect={setSelectedCourse}
          onViewMore={() => setShowExpandedCourses(true)}
        />
        <GraduateSuccess />
        <CoreValues />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      
      {selectedCourse && (
        <CourseDetailModal 
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
      
      {showExpandedCourses && (
        <ExpandedCoursesModal 
          onClose={() => setShowExpandedCourses(false)}
          onCourseSelect={setSelectedCourse}
        />
      )}
    </AppContainer>
  )
}

export default App
