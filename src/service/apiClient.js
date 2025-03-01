import { API_URL } from './constants';

async function login(email, password) {
  return await post('login', { email, password }, false);
}

async function register(email, password) {
  return post('users', { email, password }, false);
  // return await login(email, password);
}

async function createProfile(userId, firstName, lastName, githubUrl, bio) {
  return await patch(`users/${userId}`, { firstName, lastName, githubUrl, bio });
}

async function getPosts() {
  const res = await get('posts');
  return res.data.posts;
}
async function addPost(content) {
  const res = await post('posts', { content }, true);
  return res.data.posts;
}
async function getCohort(id) {
  const res = await get(`cohorts/${id}`, null);
  return res.data.cohort;
}

async function getUser(id) {
  return await get(`users/${id}`);
}

async function updateUser(id, data) {
  return await patch(`users/${id}`, data);
}

async function post(endpoint, data, auth = true) {
  return await request('POST', endpoint, data, auth);
}

async function patch(endpoint, data, auth = true) {
  return await request('PATCH', endpoint, data, auth);
}

async function get(endpoint, auth = true) {
  return await request('GET', endpoint, null, auth);
}

async function request(method, endpoint, data, auth = true) {
  const opts = {
    headers: {
      'Content-Type': 'application/json'
    },
    method
  };

  if (method.toUpperCase() !== 'GET') {
    opts.body = JSON.stringify(data);
  }

  if (auth) {
    // eslint-disable-next-line dot-notation
    opts.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }

  const response = await fetch(`${API_URL}/${endpoint}`, opts);

  return response.json();
}

export { login, getPosts, register, createProfile, addPost, getCohort, getUser, updateUser };
