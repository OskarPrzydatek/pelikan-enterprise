import styled from 'styled-components';

import { flexCenterMixin } from '~/styles/mixins';

export const Footer = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.spaces.m};

  ${flexCenterMixin};
`;
