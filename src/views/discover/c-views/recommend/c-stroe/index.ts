import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getHotRecommend, getNewAlbum, getTopBanner } from '../c-services/recommend';

// 异步action
export const fetchBannerDateAction = createAsyncThunk('banners', async () => {
  const res = await getTopBanner();
  return res.banners;
});

export const fetchHotRecommendsDateAction = createAsyncThunk('hotRecommends', async () => {
  const res = await getHotRecommend(8);
  return res.result;
});

export const fetchNewAlbumDateAction = createAsyncThunk('newAlbum', async () => {
  const res = await getNewAlbum();
  return res.albums;
});

interface IRecommendState {
  banners: any[];
  hotRecommends: any[];
  newAlbums: any[];
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
};

const recommend = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerDateAction.fulfilled, (state, action) => {
        state.banners = action.payload;
        console.log(state);
      })
      .addCase(fetchHotRecommendsDateAction.fulfilled, (state, action) => {
        state.hotRecommends = action.payload;
      })
      .addCase(fetchNewAlbumDateAction.fulfilled, (state, action) => {
        state.newAlbums = action.payload;
      });
  },
});

export default recommend.reducer;
