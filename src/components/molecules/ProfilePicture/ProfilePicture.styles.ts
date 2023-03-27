import styled from 'styled-components';

export const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.l};
  padding: ${({ theme }) => theme.spaces.s};
`;

export const Image = styled.img`
  width: 3rem;

  @media ${({ theme }) => theme.breakpoints.phone} {
    width: 2.5rem;
  }
`;
