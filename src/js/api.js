const { default: axios } = require('axios');

const ENDPOINT = 'https://pixabay.com/api/';
const API_KEY = '33722400-4ec97df60eea6ef613b463c01';

const options = {
  headers: {
    'X-API_KEY': '33722400-4ec97df60eea6ef613b463c01',
  },
};

export default class SearchImagesApi {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
    this.currentHits = 0;
  }
  async getImages() {
    const URL = `${ENDPOINT}?key=33722400-4ec97df60eea6ef613b463c01&q=${this.searchQuery}&orientation=horizonal&image_type=photo&safesearch=true&per_page=40&page=${this.page}`;

    const response = await axios.get(URL);

    this.nextPage();

    return response.data;
  }
  nextPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
