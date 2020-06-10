// ES5 prototype and ajax
// -1 make constructor
function easyHTTP() {
this.http = new XMLHttpRequest();

};

//-2 Make an HTTP Get Request
easyHTTP.prototype.get = function(url, callback){
this.http.open('GET', url , true);

let self = this; 
// this.http.onload = function(){
//   //this.http.status is not in scope with the function above so we need to add let and use self 
//   if(this.http.status === 200){
//     console.log(this.http.responseText)
//   }
// };

this.http.onload = function(){
  if(self.http.status === 200){
    callback( null, self.http.responseText); // we put null for the error
  } else {
    callback('Error: ' + self.http.status);
  }
};
this.http.send();
}
//-3 Make an HTTP POST Request
//-4 Make an HTTP PUT Request
//-5 Make an HTTP DELETE Request