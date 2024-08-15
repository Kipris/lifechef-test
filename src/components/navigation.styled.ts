import styled from "styled-components";
import Link from "next/link";

export const $Container = styled.div`
  padding: 16px 0;
  background-color: var(--background-color-main);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  border-bottom: 1px solid var(--color-divider);
`;

export const $Nav = styled.div`
  max-width: var(--container-width);
  margin: auto;
`;

export const $Link = styled(Link).attrs<{ isActive: boolean }>(({ isActive }) => ({
  isActive: undefined,
}))<{ isActive: boolean }>`
  margin-right: 0.5rem;
    font-weight: 500;
    color: ${({ isActive }) => (isActive ? 'var(--color-active)' : 'inherit')};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
`;