import styled from 'styled-components';

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.m};
`;

export const SubmitButton = styled.input`
  appearance: none;
  border: none;
  width: 50%;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => theme.spaces.s};

  @media ${({ theme }) => theme.breakpoints.phone} {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
