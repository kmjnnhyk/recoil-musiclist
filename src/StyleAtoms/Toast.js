/* eslint-disable default-case */
import styled from 'styled-components';

export default styled.div`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  display: grid;
  place-items: center;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  position: ${({ position }) => position};
  width: 100%;
  height: ${({ height }) => height};
  right: 50%;
  // opacity: ${({ isClosing }) => (isClosing ? 0.9 : 0)};
  bottom: 344px;
  // transform: translateX(50%) translateY(${({ isClosing }) => (isClosing ? -50 : 0)}%);
  // transform: translateX(50%);
  animation: ${({ animation }) => animation};
  animation-delay: ${({ animation }) => animation};
  // animation-name: toast;
  // animation-duration: 1.5s;
  // animation-iteration-count: infinite;
  // animation-direction: alternate;
  transition: all 0.3s ease-in;
  background: ${({ background }) => background};
  border-radius: 3em;
`;
