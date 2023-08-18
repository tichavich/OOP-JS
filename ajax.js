//GET
  async function ajaxGET(url,send_request,element,callback){
    const prepare_data = {};
    for(let i=0; i<elements.length;i++){
      prepare_data[send_request[i]] = $(elements[i]).val();
    }

    const XHR = await new XMLHttpRequest();
    XHR.onreadystatechange = function(){
    XHR.setRequestHeader("Content-Type", "application/json");
        if(this.readyState == 4 && this.status == 200){
            callback(elements,this.responseText);
        }
    };
    XHR.open("GET",url,true);
    XHR.send(JSON.stringify(prepare_data));
}


//POST
async function ajaxPOST(url,callback){
    const xhr = await new XMLHttpRequest();
    xhr.onreadystatechange = function(){
    xhr.setRequestHeader("Content-Type", "application/json");
    if(this.readyState == 4 && this.status == 200){
        callback(this.responseText);
    }
    };
    xhr.open("POST",url,true);
    xhr.send(JSON.stringify(dataset));
}

  async function APIGetJson(url, callback) {
    try {
      const response = await fetch(url);
      const res = await response.json();
      callback(res);
    } catch (error) {
      console.error(`error: ${error.message}`);
    }
  }

  const ajaxGetAdd = (url, sendReq,elements, callback) => {
    const prepare_data = {};
    for(let i=0; i<elements.length;i++){
      prepare_data[sendReq[i]] = $(elements[i]).val();
    }
    $.ajax({
      url: url,
      method: "GET",
      data: prepare_data,
      success: function(res) {
        callback(elements,res);
      }
    });
  }

  const responseState = (ele,state) => {
    if (state === '1') {
      Swal.fire({
        icon: 'warning',
        html: 'ไม่สามารถบันทึกค่าซ้ำได้<br>โปรดตรวจสอบข้อมูลอีกครั้ง',
      });
    } else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

      Toast.fire({
        icon: 'success',
        title: 'บันทึกข้อมูลเรียบร้อย'
      });
    }

    //reset all input
    ele.forEach((element_name)=>{
      $(element_name).val('');
    });
  }
