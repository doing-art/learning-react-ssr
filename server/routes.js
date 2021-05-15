const Counter = require( '../src/components/Counter' ).default;
const Post = require( '../src/components/Post' ).default;

module.exports = [
  {
    path: '/',
    exact: true,
    component: Counter,
  },
  {
    path: '/post',
    exact: true,
    component: Post,
  }
];
