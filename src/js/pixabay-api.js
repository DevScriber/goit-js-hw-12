import axios from 'axios';

export async function getImages(userQuery, page = 1, per_page) {
  const { data } = await axios(`https://pixabay.com/api/`, {
    params: {
      key: `49445934-7dcc9965669d62101dac3c068`,
      q: userQuery,
      image_type: `photo`,
      orientation: `horizontal`,
      safesearch: true,
      page,
      per_page,
    },
  });

  return data;
}
