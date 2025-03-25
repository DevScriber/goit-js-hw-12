import axios from 'axios';

export function getImages(userQuery) {
  return axios(`https://pixabay.com/api/`, {
    params: {
      key: `49445934-7dcc9965669d62101dac3c068`,
      q: userQuery,
      image_type: `photo`,
      orientation: `horizontal`,
      safesearch: true,
    },
  }).then(response => response.data);
}
