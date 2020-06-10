//we instantiate from the other constructor in the other file
// we are making a new object.
const http = new easyHTTP;

// Get Posts-- function below is what we declared in the easyHttp as callback function
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err){
//     console.log(err)
//   } else{
//     console.log(posts);
//   }
 
// });
// Get single post --add /1 in the end of url

// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
//   if(err){
//     console.log(err);
//   } else{
//     console.log(post);
//   }
//  });

// POST Request
// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//Update Post

// http.put('https://jsonplaceholder.typicode.com/posts/1',data, function(err, post){
//   if(err){
//         console.log(err);
//       } else {
//         console.log(post);
//       }
// });

//Delete post
  http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err){
    console.log(err);
  } else {
    console.log(response);
  }
 });