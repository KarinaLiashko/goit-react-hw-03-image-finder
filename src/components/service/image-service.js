import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34508781-665843dc1d4446224c16b5110';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 12,
};

export const getImages = async (query, page) => {
  const response = await axios.get('search', {
    params: {
      query,
      page,
    },
  });

  return response.data;
};
