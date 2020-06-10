//we instantiate from the other constructor in the other file
// we are making a new object.
const http = new easyHTTP;

// Get Posts-- function below is what we declared in the easyHttp as callback function
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if(err){
    console.log(err)
  } else{
    console.log(posts);
  }
 
});