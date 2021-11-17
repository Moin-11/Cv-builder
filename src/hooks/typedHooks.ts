import { AppDispatch, DefaultRootState } from '@/store/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<DefaultRootState> =
  useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
