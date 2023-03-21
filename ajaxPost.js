  
  ajaxPOST = (data) =>{
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "file_name", true); 
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = this.responseText;
      //console.log(JSON.parse(response));   convent data type 'JSON'
      console.log(response);
    }
  };
  xhttp.send("id="+encodeURIComponent(data));
}
  //let data = {id:"001",user:"test1"};
  ajaxPOSTJson = (dataset) =>{
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "file_name", true); 
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let response = this.responseText;
        console.log(response);
      }
    };
    xhttp.send(JSON.stringify(dataset));
  }
  
  
