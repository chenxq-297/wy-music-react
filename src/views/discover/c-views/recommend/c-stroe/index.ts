import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getArtistList, getHotRecommend, getNewAlbum, getTopBanner, getTopList } from '../c-services/recommend';

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

export const fetchArtistDateAction = createAsyncThunk('artistDate', async (parma, { dispatch }) => {
  const res = await getArtistList(5);
  return res.artists;
});

export const fetchRankingDataAction = createAsyncThunk('ranking', async () => {
  const rankingIds = [19723756, 3779629, 2884035];

  // const Promises: Promise<any>[] = [];
  // for (const id of rankingIds) {
  //   Promises.push(getTopList(id));
  // }
  // rankingIds.map((item) => {
  //   console.log(item, 1231312);
  // });
  // Promise.all(Promises).then((res) => {
  //   const playList = res.filter((item) => item.playlist).map((item) => item.playlist);
  //   return playList;
  // });

  const result = await Promise.all(rankingIds.map((id) => getTopList(id)));
  return result.filter((item) => item.playlist).map((item) => item.playlist);
});

interface IRecommendState {
  banners: any[];
  hotRecommends: any[];
  newAlbums: any[];
  rankings: any[];
  settleSingers: any[];
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: [],
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
      })
      .addCase(fetchRankingDataAction.fulfilled, (state, action) => {
        if (action.payload !== undefined) {
          state.rankings = action.payload;
        }
      })
      .addCase(fetchArtistDateAction.fulfilled, (state, { payload }) => {
        state.settleSingers = payload;
      });
  },
});

export default recommend.reducer;
