const fetchAPI = async (url) =>{
    await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('Error status: ' + response.status);
        }
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });
}
// const get = async () =>{
//     console.log('get_1');
//      await fetchAPI('https://dummyapi.online/api/products/20');
//      console.log('get_2');
//      await fetchAPI('https://dummyapi.online/api/products/21');
//      console.log('get_3');
//      await fetchAPI('https://dummyapi.online/api/products/22');
// }

const step = (step) =>{
    return new Promise((resolve, reject) =>{
        let state = true
        if(state){
            setTimeout(()=>{
                resolve(`Step ${step} completed`);
            }, 2000);
        }else{
            reject(`Step ${step} failed`);
        }
    });
}





