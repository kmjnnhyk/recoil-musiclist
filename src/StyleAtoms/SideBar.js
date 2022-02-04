import styled from 'styled-components';

export default styled.div`
  position: fixed;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  ${({ display }) => display && `display : ${display}`};
  flex-direction: column;
  background: ${({ background }) => background};
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
`;
