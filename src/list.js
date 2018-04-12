import axios from 'axios';
import config from './config';
let listDOM;
let maxId;


const fetchList = () => {
  return axios
  .get(config.url.getPosts)
  .then((result) => { return result.data;  });
}

const getListHTML = (posts) => {
  return posts.reduce((html, post) => {
    return html + `<article class="notification">
    <p class="title has-text-dark">${post.title}</p>
    <p class="subtitle has-text-dark">${post.author}</p>
  </article>`
  }, '');
}

const calculateMaxId = (posts) => {
  maxId = posts.reduce((max, post) => {
    return parseInt(post.id) > max ? parseInt(post.id) : max
  }, 0)
}

export const getMaxId = () => {
  return maxId;
}

export const initList = () => {
  listDOM = document.querySelector('#list');
  renderList();
}

export const renderList = () => {
  fetchList()
  .then((posts) => {
    listDOM.innerHTML = getListHTML(posts);
    return posts;
  })
  .then((posts) => { 
    calculateMaxId(posts);
  });
}