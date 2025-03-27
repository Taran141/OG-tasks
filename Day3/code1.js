// function fetchData() {
//     return fetch('https://dummyjson.com/products/search?q=phone')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         return data;
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
  
  async function fetchData(){
    const data = await fetch('https://dummyjson.com/products/search?q=phone')
   const jsonValue = await data.json();
   console.log(jsonValue);
  }
  fetchData().catch((err)=>console.log(err))