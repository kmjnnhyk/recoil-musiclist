import styled from 'styled-components';

export default styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding || '8px'};
  line-height: ${({ lineHeight }) => lineHeight};
  height: ${({ height }) => height || '40px'};
  width: ${({ width }) => width || '100%'};
  border: ${({ border }) => border || '3px solid var(--black)'};
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  text-align: center;
  color: ${({ color }) => color || 'var(--white)'};
  :focus {
    outline: none;
  }
  ::placeholder {
    color: var(--deepgrey);
  }
`;
