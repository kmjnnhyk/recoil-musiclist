import styled from 'styled-components';

export default styled.p`
  padding-left: ${({ paddingLeft }) => paddingLeft};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  animation: ${({ animation }) => animation};
  animation-delay: ${({ animation }) => animation};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-iteration-count: ${({ animationIterationCount }) => animationIterationCount};
  animation-name: ${({ animationName }) => animationName};
  animation-timing-function: ${({ animationTimingFunction }) => animationTimingFunction};
  :hover {
    animation-play-state: ${({ hover }) => hover.animationPlayState};
  }
`;
