import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { coursesData } from '../data/coursesData'

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  
  @media (max-width: 768px) {
    height: 60px;
  }
`

const Logo = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const LogoSpan = styled.span`
  color: #dc2626;
`

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: 15px;
  font-weight: 500;
  color: #374151;
  transition: color 0.3s ease;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: #dc2626;
  }

  &:focus-visible {
    outline: 2px solid #dc2626;
    outline-offset: 4px;
    border-radius: 2px;
  }
`

const CoursesDropdown = styled.div`
  position: relative;
`

const DropdownToggle = styled.button`
  font-size: 15px;
  font-weight: 500;
  color: #374151;
  background: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.3s ease;

  &:hover {
    color: #dc2626;
  }

  &:focus-visible {
    outline: 2px solid #dc2626;
    outline-offset: 4px;
    border-radius: 2px;
  }
`

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  min-width: 280px;
  margin-top: 8px;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s ease;
  z-index: 1001;
  max-height: 400px;
  overflow-y: auto;
`

const DropdownItem = styled.button`
  display: block;
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
  color: #374151;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    color: #dc2626;
  }

  &:focus-visible {
    outline: 2px solid #dc2626;
    outline-offset: -2px;
  }
`

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f4f6;
  border-radius: 6px;
  padding: 8px 12px;
  gap: 8px;
  flex: 0 1 250px;

  @media (max-width: 1024px) {
    flex: 0 1 180px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #1f2937;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`

const EnrollButton = styled.button`
  background-color: #dc2626;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: #b91c1c;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid #dc2626;
    outline-offset: 2px;
  }

  @media (max-width: 1024px) {
    padding: 8px 16px;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`

const HamburgerMenu = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 8px;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 24px;
    height: 3px;
    background-color: #0f172a;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &.active span:nth-child(1) {
    transform: rotate(45deg) translate(10px, 10px);
  }

  &.active span:nth-child(2) {
    opacity: 0;
  }

  &.active span:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
  }
`

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  flex-direction: column;
  gap: 0;
  max-height: 400px;
  overflow-y: auto;
  z-index: 999;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
  }
`

const MobileNavLink = styled.a`
  padding: 16px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
    color: #dc2626;
  }
`

const MobileCoursesAccordion = styled.div`
  border-bottom: 1px solid #f3f4f6;
`

const MobileCoursesToggle = styled.button`
  width: 100%;
  padding: 16px 20px;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
    color: #dc2626;
  }
`

const MobileCoursesMenu = styled.div`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: #f9fafb;
`

const MobileCourseItem = styled.button`
  display: block;
  width: 100%;
  padding: 12px 20px;
  padding-left: 40px;
  text-align: left;
  font-size: 13px;
  color: #374151;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    color: #dc2626;
  }
`

function Header() {
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleClickOutside = () => {
      setCoursesOpen(false)
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleSmoothScroll = (e, id) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    // Search functionality can be implemented here
  }

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo>
          Digital <LogoSpan>Web</LogoSpan>
        </Logo>

        <NavContainer>
          <NavLink onClick={(e) => handleSmoothScroll(e, 'home')}>
            Home
          </NavLink>
          <NavLink onClick={(e) => handleSmoothScroll(e, 'about')}>
            About
          </NavLink>

          <CoursesDropdown>
            <DropdownToggle 
              onClick={(e) => {
                e.stopPropagation()
                setCoursesOpen(!coursesOpen)
              }}
            >
              Courses
              <span>▼</span>
            </DropdownToggle>
            <DropdownMenu isOpen={coursesOpen}>
              {coursesData.featured.map(course => (
                <DropdownItem
                  key={course.id}
                  onClick={() => {
                    handleSmoothScroll({ preventDefault: () => {} }, 'courses')
                    setCoursesOpen(false)
                  }}
                >
                  {course.title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </CoursesDropdown>

          <NavLink onClick={(e) => handleSmoothScroll(e, 'contact')}>
            Contact Us
          </NavLink>
        </NavContainer>

        <SearchBox>
          <span>🔍</span>
          <SearchInput 
            type="text" 
            placeholder="Search courses" 
            value={searchQuery}
            onChange={handleSearch}
            aria-label="Search courses"
          />
        </SearchBox>

        <ButtonGroup>
          <EnrollButton onClick={(e) => handleSmoothScroll(e, 'contact')}>
            Enroll Now
          </EnrollButton>
          <HamburgerMenu 
            className={mobileMenuOpen ? 'active' : ''}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </HamburgerMenu>
        </ButtonGroup>
      </HeaderContent>

      <MobileMenu isOpen={mobileMenuOpen}>
        <MobileNavLink onClick={(e) => handleSmoothScroll(e, 'home')}>
          Home
        </MobileNavLink>
        <MobileNavLink onClick={(e) => handleSmoothScroll(e, 'about')}>
          About
        </MobileNavLink>
        
        <MobileCoursesAccordion>
          <MobileCoursesToggle 
            onClick={() => setMobileCourseOpen(!mobileCourseOpen)}
          >
            Courses
            <span>{mobileCourseOpen ? '▲' : '▼'}</span>
          </MobileCoursesToggle>
          <MobileCoursesMenu isOpen={mobileCourseOpen}>
            {coursesData.featured.map(course => (
              <MobileCourseItem
                key={course.id}
                onClick={() => handleSmoothScroll({ preventDefault: () => {} }, 'courses')}
              >
                {course.title}
              </MobileCourseItem>
            ))}
          </MobileCoursesMenu>
        </MobileCoursesAccordion>

        <MobileNavLink onClick={(e) => handleSmoothScroll(e, 'contact')}>
          Contact Us
        </MobileNavLink>
      </MobileMenu>
    </HeaderWrapper>
  )
}

export default Header
