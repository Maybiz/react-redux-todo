import * as axios from 'axios';

const apiFirebase = axios.create({
  baseURL: 'https://todos-dyma-51d42-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default apiFirebase;