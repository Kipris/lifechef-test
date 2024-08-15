'use client';

import React, { createContext, useContext } from 'react';
import { StoreApi, useStore } from 'zustand';
import {
  type MealStore,
  createMealStore,
} from '@/src/stores/meal-store';

interface MealStoreProviderProps {
  initialState: MealStore;
  children: React.ReactNode;
}

const MealStoreContext = createContext<StoreApi<MealStore> | null>(null);

export const MealStoreProvider: React.FC<MealStoreProviderProps> = ({ initialState, children }) => {
  const store = createMealStore(initialState);

  return (
    <MealStoreContext.Provider value={store}>
      {children}
    </MealStoreContext.Provider>
  );
};

export const useMealStore = <T, >(selector: (store: MealStore) => T): T => {
  const mealStoreContext = useContext(MealStoreContext);

  if (!mealStoreContext) {
    throw new Error('useMealStore must be used within a MealStoreProvider');
  }

  return useStore(mealStoreContext, selector);
};
