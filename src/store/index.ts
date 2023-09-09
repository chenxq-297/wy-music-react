import {configureStore} from '@reduxjs/toolkit';
import discoverSlice from './modules/discover';
import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux';

const store = configureStore({
  reducer: {
    discover: discoverSlice,
  },
});

export const useAppSelecor: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
// 描述：useDispatch 函数返回一个store.dispatch类型
export const useAppdispatch: () => typeof store.dispatch = useDispatch;

export default store;
