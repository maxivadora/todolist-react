import axios from 'axios';

const request = axios.create({
  // TODO: cambiar al endpoint correcto.
  // baseURL: 'https://jsonplaceholder.typicode.com'
  baseURL: 'http://localhost:4000',
  headers: {'Access-Control-Allow-Origin': '*'}
})

export default request;