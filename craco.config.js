const path = require('path');

// 根目录
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
    },
  },
};
