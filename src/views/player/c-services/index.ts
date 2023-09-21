import Request from '@/service/';

export function getSongDetail(ids: number) {
  return Request.request({
    method: 'get',
    url: '/song/detail',
    params: {
      ids,
    },
  });
}

export function getSongLyric(id: number) {
  return Request.request({
    method: 'get',
    url: '/lyric',
    params: {
      id,
    },
  });
}
