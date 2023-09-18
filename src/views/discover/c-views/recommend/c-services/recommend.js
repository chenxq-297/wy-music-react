import request from '@/service/index';

export function getTopBanner() {
  return request.request({
    url: '/banner',
  });
}

export function getHotRecommend(limit = 30) {
  return request.request({
    url: '/personalized',
    params: {
      limit,
    },
  });
}

export function getNewAlbum() {
  return request.request({
    url: '/album/newest',
  });
}

// export function getNewAlbum(limit, offset) {
//   return request.request({
//     url: '/album/new',
//     params: {
//       limit,
//       offset,
//     },
//   });
// }

export function getTopList(id) {
  return request.request({
    url: '/playlist/detail',
    params: {
      id,
    },
  });
}

export function getArtistList(limit, cat) {
  return request.request({
    url: '/artist/list',
    params: {
      cat,
      limit,
    },
  });
}
