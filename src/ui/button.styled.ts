import styled, { css } from 'styled-components';
import { ButtonVariant } from './button';

export const $Button = styled.button<{ $variant: ButtonVariant }>`
  width: 100%;
  background-color: darkgrey;
  color: white;
  padding: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: grey;
  }

  ${({ $variant }) => $variant === 'success' &&
    css`
      background-color: var(--color-active);

      &:hover {
        background-color: var(--color-active-hover);
      }
  `}
`;
