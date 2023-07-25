import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.m};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 50%;
  }
`;

export const SubmitButton = styled.input`
  appearance: none;
  border: none;
  width: 100%;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => theme.spaces.s};
  font-size: ${({ theme }) => theme.fontSizes.s};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 50%;
  }
`;
