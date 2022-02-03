import styled from 'styled-components';

export default styled.li`
  list-style: none;
  ${({ display }) => display && `display : ${display}`};
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
  margin-top: 8px;
  font-size: ${({ fontSize }) => fontSize};
  :last-child {
    border-bottom: none;
  }
`;
