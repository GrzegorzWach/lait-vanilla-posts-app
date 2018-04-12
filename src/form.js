import axios from 'axios';
import config from './config';
import {getMaxId, renderList} from './list';

let authorDOM;
let titleDOM;
let buttonDOM;

export const initForm = () => {
  
  titleDOM = document.querySelector('[name="post.title"]');
  authorDOM = document.querySelector('[name="post.author"]');
  buttonDOM = document.querySelector('#add-post');

  buttonDOM.addEventListener('click', () => {
    const post = {
      id: getMaxId() + 1,
      title: titleDOM.value,
      author: authorDOM.value
    };

    if (!validateForm(post)) {
      return false;
    }
    
    clearForm();

    addPost(post)
    .then(renderList);
  });
}

const clearForm = (post) => {
  titleDOM.value = '';
  authorDOM.value = '';
}

const validateForm = (post) => {
  return post.title.trim() && post.author.trim();
}

const addPost = (post) => {
  return axios
  .post(config.url.addPost, post);
}