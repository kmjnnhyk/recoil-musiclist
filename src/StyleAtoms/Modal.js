/* eslint-disable default-case */
import styled from 'styled-components';

export default styled.div`
  display: grid;
  place-items: center;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  position: fixed;
  width: 80%;
  max-width: 540px;
  height: ${({ height }) => height};
  right: 50%;
  bottom: 34px;
  transform: translateX(50%);
  animation: ${({ animation }) => animation};
  animation-delay: ${({ animation }) => animation};
  animation-name: toast;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  transition: ${({ transition }) => transition};
  background: ${({ background }) => background};
  border-radius: 3em;
`;
