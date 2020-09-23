import axios from 'axios'

const KEY = 'AIzaSyCZNzrvbZsd9oUPbeASd8biep4msTqZLhg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type: 'video',
        maxResults:5,
        key:KEY
    }
});