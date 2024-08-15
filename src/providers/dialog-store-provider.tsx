'use client';

import React, { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';
import { createDialogStore, defaultInitState, DialogStore } from '@/src/stores/dialog-store';
import { ConfirmationDialog } from '@/src/components/confirmation-dialog';

const DialogStoreContext = createContext<ReturnType<typeof createDialogStore> | undefined>(undefined);

export interface DialogProviderProps {
  children: React.ReactNode;
}

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const storeRef = useRef<ReturnType<typeof createDialogStore>>();

  if (!storeRef.current) {
    storeRef.current = createDialogStore(defaultInitState);
  }

  const isVisible = useStore(storeRef.current, (state) => state.isVisible);

  return (
    <DialogStoreContext.Provider value={storeRef.current}>
      {children}
      {isVisible && <ConfirmationDialog />}
    </DialogStoreContext.Provider>
  );
};

export const useDialogStore = <T,>(selector: (store: DialogStore) => T): T => {
  const dialogStoreContext = useContext(DialogStoreContext);

  if (!dialogStoreContext) {
    throw new Error(`useDialogStore must be used within DialogProvider`);
  }

  return useStore(dialogStoreContext, selector);
};
