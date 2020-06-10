// ES5 prototype and ajax
// -1 make constructor
function easyHTTP() {
  this.http = new XMLHttpRequest();

};

//-2 Make an HTTP Get Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  // this.http.onload = function(){
  //   //this.http.status is not in scope with the function above so we need to add let and use self 
  //   if(this.http.status === 200){
  //     console.log(this.http.responseText)
  //   }
  // };

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText); // we put null for the error
    } else {
      callback('Error: ' + self.http.status);
    }
  };
  this.http.send();
}
//-3 Make an HTTP POST Request-- we have data here for posting
//1-3Because data here is a javascript object we need to convert it to jason file so in send we stringfying it
//2-3 we need to set the content type before onload
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  //2-3
  this.http.setRequestHeader('Content-type', 'application/json');
  //3-3 onloading
  let self = this;
  this.http.onload = function() {
    //response text should be the new post with the new id 
    callback(null, self.http.responseText);
  }
  //1-3
  this.http.send(JSON.stringify(data));
}
//-4 Make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  //2-3
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    //response text should be the new post with the new id 
    callback(null, self.http.responseText);
  }
  //1-3
  this.http.send(JSON.stringify(data));
}
//-5 Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);
  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null,'Post Deleted'); // we put null 
    } else {
      callback('Error: ' + self.http.status);
    }
  };
  this.http.send();
}