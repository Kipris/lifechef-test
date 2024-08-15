import styled from 'styled-components';

export const $FloatingLabel = styled.label`
  position: relative;
  font-size: 12px;
  z-index: 1;
  top: 15px;
  left: 15px;

  &:after {
    content: '';
    position: absolute;
    background-color: var(--background-color-main);
    width: calc(100% + 4px);
    height: 100%;
    left: -2px;
    top: 0;
    z-index: -1;
  }
`;

export const $CheckboxContainer = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  display: inline-block;
  position: relative;
`;

export const $Checkbox = styled.span`
  width: inherit;
  height: inherit;
  border: 1.5px solid var(--border-color);
  border-radius: 4px;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background-color: var(--color-active);
    border-radius: 2px;
    transform: scale(0) translate(-50%, -50%);
  }
`;

export const $CheckboxInput = styled.input`
  opacity: 0;
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;

  &:checked + ${$Checkbox}::after {
    transform: translate(-50%, -50%);
  }
`;

export const $CheckboxLabel = styled.span`
  cursor: pointer;
  font-size: 12px;
  color: var(--label-color);

  a {
    color: var(--color-active);
    text-decoration: underline;
  }
`;

export const $ErrorMessage = styled.span`
  font-size: 12px;
  color: var(--color-error);
`;
