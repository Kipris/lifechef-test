import styled from "styled-components";

export const $Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const $Dialog = styled.div`
  background-color: var(--background-color-main);
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

export const $DialogHeader = styled.div`
  border-bottom: 1px solid var(--color-divider);
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: center;
`;

export const $DialogBody = styled.div`
  padding-bottom: 20px;
`;

export const $DialogFooter = styled.div`
  display: flex;
  justify-content: flex-end;

  button:first-child {
    margin-right: 10px;
  }
`;
