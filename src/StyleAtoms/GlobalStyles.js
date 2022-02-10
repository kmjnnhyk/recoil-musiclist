import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @keyframes scrollX {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes toast {
    0% {
      transform: translateY(0%);
      opacity: 0;
    }
  
    16% {
      transform: translateY(-132.27%);
    }
  
    28% {
      transform: translateY(-86.88%);
    }
  
    44% {
      transform: translateY(-104.63%);
    }
  
    59% {
      transform: translateY(-98.36%);
    }
  
    73% {
      transform: translateY(-100.58%);
    }
  
    88% {
      transform: translateY(-99.8%);
    }
  
    100% {
      transform: translateY(-100%);
      opacity: 1;
    }
  }

  html{
    height: 100%;
    width: 100%;  
  }
  body {
    margin:0;
    height: 100%;
    width: 100%;
    background: var(--neongreen);
    font-size:14px;
    font-family: -apple-system, Roboto, BlinkMacSystemFont, sans-serif, Arial;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #root {
    height: 100%;
    width: 100%;
  }

  img{
    border : 0;
    box-shadow : none;
  }

  button,
  input,
  img,
  textarea,
  select,
  svg,
  label,
  a {
    font-family: inherit;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  li {
    list-style: none;
  }
  
  :root {
  --primary-700: #101c4c;
  --primary-600: #182a72;
  --primary-500: #203898;
  --primary-400: #2946be;
  --primary-300: #a9b5e5;
  --primary-200: #e1e7ff;
  --primary-100: #f4f5fb;
  --black: #141721;
  --deepgrey: #343742;
  --grey-500: #525561;
  --grey-400: #8d909d;
  --grey-300: #b9bcc1;
  --grey-200: #dcdee1;
  --grey-100: #f5f6f6;
  --white: #ffffff;
  --blue: #096DE0;
  --neonblue: rgb(38, 0, 255);
  --neongreen: #00DF26;
  --green-400: #44c46d;
  --yellow: #fede03;
  --orange: #ffa100;
  --coral: #ff5268;
  --red-400: #fc2b38;
  --minus-margin-android: 0px -16px;
  --minus-margin-ios: 0px -24px;
  --minus-margin-undefined: 0px -24px;
  --padding-android: 0px 16px;
  --padding-ios: 0px 24px;
  --padding-undefined: 0px 24px;
  }
`;

export default GlobalStyles;
