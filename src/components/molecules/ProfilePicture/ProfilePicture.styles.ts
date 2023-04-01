import styled, { css } from 'styled-components';

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

export const labelCSS = css`
  color: ${({ theme }) => theme.colors.darkBlue} !important;
  font-weight: 700;
`;
