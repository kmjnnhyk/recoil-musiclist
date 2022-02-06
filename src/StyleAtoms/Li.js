import styled from 'styled-components';

export default styled.li`
  list-style: none;
  ${({ display }) => display && `display : ${display}`};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-direction: ${({ flexDirection }) => flexDirection};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows}
  gap: ${({ gap }) => gap};
  justify-items: ${({ justifyItems }) => justifyItems};
  place-items: ${({ placeItems }) => placeItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  border: ${({ border }) => border};
  border-bottom: ${({ borderBottom }) => borderBottom};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  word-break: ${({ wordBreak }) => wordBreak};
  white-space: ${({ whiteSpace }) => whiteSpace};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  overflow: ${({ overflow }) => overflow};
  animation: ${({ animation }) => animation};
  animation-delay: ${({ animation }) => animation};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-iteration-count: ${({ animationIterationCount }) => animationIterationCount};
  animation-name: ${({ animationName }) => animationName};
  :last-child {
    border-bottom: none;
  }
`;
