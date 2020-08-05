import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY= '?key=yukimasa_nomoto'

export function fetchPosts(callback){

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
    .then(() => callback);
    // .then(function(response){

    //     console.log('response');
    //     console.log(response);

    //     return {
    //         type:FETCH_POSTS,
    //         payload:response
    //     };
    
    // });
    


    console.log('after get');
    console.log(request);
    return {
        type:FETCH_POSTS,
        payload:request
    };
}