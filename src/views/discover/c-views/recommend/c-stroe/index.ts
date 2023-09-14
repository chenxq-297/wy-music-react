import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {getTopBanner} from '../c-services/recommend';

// 异步action
export const fetchBannerDateAction = createAsyncThunk('banners', async () => {
  const res = await getTopBanner();
  return res.banners;
});

interface IRecommendState {
  banners: any[];
}
const initialState: IRecommendState = {
  banners: [],
};

const recommend = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBannerDateAction.fulfilled, (state, action) => {
      state.banners = action.payload;
      console.log(state);
    });
  },
});

export default recommend.reducer;
