import styled from 'styled-components';

export default styled.div`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  display: grid;
  place-items: center;
  background: ${({ background }) => background};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  border: none;
  outline: none;
  border-radius: 50%;
  color: ${({ color }) => color};
`;
