import styled from 'styled-components';

import { ICSS } from '~/models';

export const ClickableIcon = styled.button<ICSS>`
  padding: 0;
  border: none;
  appearance: none;
  background-color: transparent;
  display: flex;
  cursor: pointer;

  ${({ css }) => css}
`;

export const IconWrapper = styled.span<ICSS>`
  ${({ css }) => css}
`;
