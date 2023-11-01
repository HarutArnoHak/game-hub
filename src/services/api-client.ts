import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {

        key: '80bc51ce48f942a4a41897efbe5def63'
    }

})