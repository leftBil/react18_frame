import fetch from 'axios';

// fetch.defaults.timeout = 200;

export default function request(url, options) {

    return fetch(`${url}`, options)
        // .catch(handleError)
        // .then((response) => {
        //     console.log(response,'response')
        //     try{
        //         return { data: response.data };
        //     }catch(e){
        //         return { data: response.data };
        //     }
        // });
}

// function handleError(errorObj) {
//     console.log('this is error!')
// }