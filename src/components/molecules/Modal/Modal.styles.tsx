import styled, { css } from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl};
  padding: ${({ theme }) => theme.spaces.l};
  background-color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 60%;
    min-height: 30%;
    max-height: 80%;
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
