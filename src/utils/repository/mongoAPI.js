import axios from 'axios';

const SERVICE_URL = 'https://floggit-service.herokuapp.com';

const validateStatus = status => (response) => {
  if (response.status !== status) {
    throw new Error('Service returned a bad status');
  }
  return response;
};

const get = id => axios.get(`${SERVICE_URL}/v1/notes/${id}`)
  .then(validateStatus(200))
  .then(response => response.data)
  .catch(err => err.message);

const getAll = () => axios.get(`${SERVICE_URL}/v1/notes`)
  .then(validateStatus(200))
  .then(response => response.data.map(item => ({
    // eslint-disable-next-line no-underscore-dangle
    id: item._id,
    title: item.title,
    color: item.color,
    information: item.information,
  })))
  .catch(err => err.message);

const add = (title, color, information) =>
  axios({
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'POST',
    url: `${SERVICE_URL}/v1/notes`,
    data: JSON.stringify({ title, color, information }),
  })
    .then(validateStatus(201))
    .then(response => response.data.id)
    .catch(err => err.message);

const remove = id => axios.delete(`${SERVICE_URL}/v1/notes/${id}`)
  .then(validateStatus(204))
  .catch(err => err.message);

const update = value =>
  axios({
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'PUT',
    url: `${SERVICE_URL}/v1/notes/${value.id}`,
    data: JSON.stringify({
      id: value.id,
      title: value.title,
      color: value.color,
      information: value.information,
    }),
  })
    .then(validateStatus(204))
    .then(response => console.dir(response))
    .catch(err => err.message);

const publicAPI = {
  get,
  getAll,
  add,
  remove,
  update,
};

export default publicAPI;
