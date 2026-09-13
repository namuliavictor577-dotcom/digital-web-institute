import styled from 'styled-components'

const WhatsAppButtonWrapper = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #ffffff;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 500;
  animation: fadeIn 0.5s ease-out 0.5s both;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.8);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  &:hover {
    background-color: #20ba5a;
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid #fbbf24;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    bottom: 20px;
    right: 20px;
    width: 56px;
    height: 56px;
    font-size: 28px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`

const Tooltip = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  color: #ffffff;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: -1;

  ${WhatsAppButtonWrapper}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 20px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid rgba(0, 0, 0, 0.9);
  }
`

function WhatsAppButton() {
  return (
    <WhatsAppButtonWrapper
      href="https://wa.me/254141415944"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Digital Web Institute on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      💚
      <Tooltip>Chat with us</Tooltip>
    </WhatsAppButtonWrapper>
  )
}

export default WhatsAppButton
