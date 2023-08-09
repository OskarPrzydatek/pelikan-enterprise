import styled, { css } from 'styled-components';

export const Modal = styled.div`
  min-width: 80%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl};
  padding: ${({ theme }) => theme.spaces.l};
  background-color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    min-width: 30%;
  }

  > * {
    text-align: center;
  }
`;

export const ModalCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const backgroundCSS = css`
  justify-content: center;
  align-items: center;
`;

export const closeIconCSS = css`
  align-self: flex-end;
`;

export const acceptButtonCSS = css`
  align-self: center;
  width: 50%;
`;
