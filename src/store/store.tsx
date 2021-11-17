import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '@/slices/root';

export const store = configureStore({ reducer });

export type DefaultRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
