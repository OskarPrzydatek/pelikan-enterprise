import styled from 'styled-components';

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spaces.xl};
  box-shadow: 0px 4px 4px 0px ${({ theme }) => theme.colors.shadowBlack};
`;
