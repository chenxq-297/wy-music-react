import {configureStore} from '@reduxjs/toolkit';

import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux';
import recommendSlice from '@/views/discover/c-views/recommend/c-stroe';

const store = configureStore({
  reducer: {
    recommend: recommendSlice,
  },
});

export const useAppSelecor: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
// 描述：useDispatch 函数返回一个store.dispatch类型
export const useAppdispatch: () => typeof store.dispatch = useDispatch;

export default store;
