import { useEffect, useState } from "react";


const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] =useState([])
  
  useEffect(()=>{
  
    fetch('fake.json')
    .then(res=>res.json())
    .then(data=>console.log(data))
  
  },[])
   
  return (
    <div>
        <h2>Anti Blue Ray Glasses</h2>
    </div>
  );
};

export default App;