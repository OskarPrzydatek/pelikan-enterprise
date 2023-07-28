import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyleLayout = createGlobalStyle`
  * {
		box-sizing: border-box;
    outline: none;
	} 

  body {
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
    display: grid;
    grid-template-rows: .5fr 8fr .5fr;
  }

	a {
		color: inherit;
		text-decoration: none;
	}

	ul {
		padding: 0;
    margin: 0;
		list-style-type: none;
	}
`;

export const MainLayout = styled.main`
  padding: ${({ theme }) => theme.spaces.l};
`;

export const PageLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
