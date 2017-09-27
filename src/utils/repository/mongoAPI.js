import axios from 'axios';

const SERVICE_URL = 'http://127.0.0.1:8081';

const validateStatus = status => (response) => {
  if (response.status !== status) {
    throw new Error('Service returned a bad status');
  }
  return response;
};

const get = () => {};

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

const remove = () => {};

const publicAPI = {
  get,
  getAll,
  add,
  remove,
};

export default publicAPI;
