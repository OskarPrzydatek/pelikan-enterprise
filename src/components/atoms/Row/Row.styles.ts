import styled from 'styled-components';

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media ${({ theme }) => theme.breakpoints.phone} {
    flex-direction: row;
  }
`;
