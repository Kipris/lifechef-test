import { createStore } from 'zustand/vanilla';
import { UserData } from '../schemas/user-data-schema';

export type DialogState = {
  isVisible: boolean;
  dialogData: UserData | null;
}

export type DialogActions = {
  showDialog: (userData: UserData) => void;
  hideDialog: () => void;
}

export type DialogStore = DialogState & DialogActions;

export const defaultInitState: DialogState = {
  isVisible: false,
  dialogData: null,
};

export const createDialogStore = (initState: DialogState = defaultInitState) => {
  return createStore<DialogStore>()((set) => ({
    ...initState,
      showDialog: (userData) => set({ isVisible: true, dialogData: userData }),
      hideDialog: () => set({ isVisible: false }),
  }));
};
