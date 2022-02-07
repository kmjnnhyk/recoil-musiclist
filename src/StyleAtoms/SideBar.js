import styled from 'styled-components';

export default styled.div`
  position: fixed;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  top: ${({ top }) => top};
  right: ${({ state }) => (state === 'entering' || state === 'entered' ? -100 : 0)}%;
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  ${({ display }) => display && `display : ${display}`};
  flex-direction: column;
  background: ${({ background }) => background};
  opacity: ${({ opacity }) => opacity};
  margin: ${({ margin }) => margin};
  ${({ marginTop }) => marginTop && `margin-top : ${marginTop}`};
  ${({ marginRight }) => marginRight && `margin-right : ${marginRight}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom : ${marginBottom}`};
  ${({ marginLeft }) => marginLeft && `margin-left : ${marginLeft}`};
  padding: ${({ padding }) => {
    return padding;
  }};
  ${({ paddingTop }) => paddingTop && `padding-top : ${paddingTop}`};
  ${({ paddingRight }) => paddingRight && `padding-right : ${paddingRight}`};
  ${({ paddingBottom }) => paddingBottom && `padding-bottom : ${paddingBottom}`};
  ${({ paddingLeft }) => paddingLeft && `padding-left : ${paddingLeft}`};
  transition: ${({ transition }) => transition};
  transform: ${({ transform }) => transform};
  animation: ${({ animation }) => animation};
  animation-delay: ${({ animation }) => animation};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-iteration-count: ${({ animationIterationCount }) => animationIterationCount};
  animation-name: ${({ animationName }) => animationName};
  animation-timing-function: ${({ animationTimingFunction }) => animationTimingFunction};
  animation-direction: ${({ animationDirection }) => animationDirection};
`;
