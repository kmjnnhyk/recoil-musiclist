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
  animation: ${({ animation }) => animation};
  animation-delay: ${({ animation }) => animation};
  background: ${({ background }) => background};
  border-radius: 3em;
  &.toast-animation-enter {
    max-height: 0;
    opacity: 0;
  }
  &.toast-animation-enter-active {
    max-height: ${({ height }) => height};
    opacity: 1;
    transition: all 500ms;
  }
  &.toast-animation-exit {
    max-height: ${({ height }) => height};
    opacity: 1;
  }
  &.toast-animation-exit-active {
    max-height: 0;
    opacity: 0;
    transition: all 500ms;
  }
`;
