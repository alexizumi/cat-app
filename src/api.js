import axios from 'axios';

const getCat = () => {
  const breed_id = Math.floor(Math.random() * 66) + 1;
  return axios.get(`https://api.thecatapi.com/v1/breeds`).then((response) => {
    console.log(response.data[breed_id], '<<< Response in Api.js');
    return response.data[breed_id];
  });
};

export default getCat;
