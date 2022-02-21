/* eslint-disable default-case */
import styled from 'styled-components';

export default styled.div`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  display: grid;
  place-items: center;
  font-size: 900;
  font-weight: ${({ fontWeight }) => fontWeight};
  position: ${({ position }) => position};
  width: 100%;
  height: ${({ height }) => height};
  right: 50%;
  bottom: 344px;
  animation: ${({ animation }) => animation};
  animation-delay: ${({ animation }) => animation};
  transition: all 0.3s ease-in;
  background: ${({ background }) => background};
  border-radius: 3em;
`;
