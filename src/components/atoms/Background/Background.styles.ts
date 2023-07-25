import styled from 'styled-components';

import { ICSS } from '~/models';

export const Background = styled.div<ICSS>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.opacityBlack};
  z-index: 2;
  display: flex;

  ${({ css }) => css}
`;
