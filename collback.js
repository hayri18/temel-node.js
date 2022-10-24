//setTimeout(() => {
 // console.log("merhaba");
//}, 2000)

//const { default: axios } = require("axios");

//setInterval(() => {
//    console.log("merhaba ben her saniye çalışacağım");
//} , 1000);

//const merhaba = (cb) => {
//    cb();
//};
//merhaba(() => {
//console.log("hello");
//});


//import fetch from "node-fetch";

//fetch("https://jsonplaceholder.typicode.com/users")
//.then(data => data.json())
//.then((users) => {
//    console.log("users yuklendi", users)
//
//    fetch("https://jsonplaceholder.typicode.com/users")
//    .then((data) => data.json())
//    .then(posts => console.log("postlar yuklendi" ,posts));

//});


//async function getdata(){
  //  const users = await ( 
    //    await fetch("https://jsonplaceholder.typicode.com/users")
    //).json();
    //const post1 = await ( 
      //  await fetch("https://jsonplaceholder.typicode.com/posts/1")
    //).json();
    //const post2 = await ( 
      //  await fetch("https://jsonplaceholder.typicode.com/posts/2")
    //).json();
    //console.log("users", users);
    //console.log("post1", post1);
    //console.log("post2" , post2);

//}
//getdata()

     

//import fetch from "node-fetch";
   //import axios from "axios";

    // (async () => {
      //    const{data: users} = await axios ("https://jsonplaceholder.typicode.com/users");
        //  const {data:post1} = await axios ("https://jsonplaceholder.typicode.com/posts/1");
          //const {data:post2} = await axios ("https://jsonplaceholder.typicode.com/posts/2");
          //console.log("users", users);
          //console.log("post1", post1);
          //console.log("post2" , post2);
            //})();
        

          //  const getusers = () => {
            //    return new Promise (async (resolve,reject) => {
              //      const{data} = await axios("https://jsonplaceholder.typicode.com/users");

                //    resolve(data);
                //}); 
            //};
            //const getpost = (post_id) => {
              //  return new Promise (async (resolve,reject) => {
                //    const{data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id
                  //  );

                    //resolve(data);
                //}); 
           // };
             //(async () => {
               //await getusers()
                //.then((data) => console.log(data))
                //.catch((e) => console.log(e));
              //await  getpost(1)
                //.then((data) => console.log(data))
                //.catch((e) => console.log(e));
    
           //  })();

            


