// import Explorebydata from "./programming shikhbo/exploreByData";
import './App.css'
import Mainsection from './programming shikhbo/Mainsection/Mainsection';
import ExploreByData from "./programming shikhbo/exploreByData";
import Hero from './programming shikhbo/hero/Hero';



function App() {

//   const num = (num) =>{
// console.log(num * 2);
//   }

const productsName= [
  {name:"nokia",price:"88"},
  {name:"apple",price:"858"},
  {name:"samsung",price:"588"}
];
  

  return (
    <div>
      
       
        {
           
           productsName.map(product => <Hero
          product={product}
          ></Hero>)
        }
      
      
      
    </div>
  );
}

export default App;


