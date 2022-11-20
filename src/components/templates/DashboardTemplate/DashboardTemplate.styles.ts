import styled from 'styled-components';

import { flexCenterMixin } from '~/styles/mixins';

export const Main = styled.main`
  width: 98vw;
  height: 98vh;

  ${flexCenterMixin};
  flex-direction: column;
`;
