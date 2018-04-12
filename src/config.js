const server = 'http://localhost:3000/';

export default {
  url: { 
    getPosts: server + 'posts',
    addPost: server + 'posts'
  }
}