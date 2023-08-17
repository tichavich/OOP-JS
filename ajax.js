//GET
async function ajaxGET(url,callback){
    const xhr = await new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            callback(this.responseText);
        }
    };
    xhr.open("GET",url,true);
    xhr.send(JSON.stringify(dataset));
}


//POST
async function ajaxPOST(url,callback){
    const xhr = await new XMLHttpRequest();
    xhr.setRequestHeader("Content-Type", "application/json");
    if(this.readyState == 4 && this.status == 200){
        callback(this.responseText);
    }
    };
    xhr.open("POST",url,true);
    xhr.send(JSON.stringify(dataset));
}