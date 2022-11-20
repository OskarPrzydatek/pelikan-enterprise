import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
		box-sizing: border-box;
	} 

  body {
    margin: 0;
    padding: 0;
  }

	a {
		color: inherit;
		text-decoration: none;
	}

	ul {
		padding: 0;
		list-style-type: none;
	}
`;
