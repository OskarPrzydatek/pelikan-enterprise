import styled from 'styled-components';

import { ICSS } from '~/styles';

export const Label = styled.label<ICSS>`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.s};

  ${({ css }) => css}
`;
