// import Cat from './components/Cat'
// import Product from './components/Product'
// import UserProfile from './components/UserProfile'
import Gadgets from "./components/Gadgets";
function App() {
  // const userData ={
  //   name : 'john',
  //   age: 23,
  //   email : 'john@gmail.com'
  // }
  const products = [
    {
      id: 1,
      name: "keyboard",
      description: "Logitech Mechanical Keyboard",
      price: 2000,
    },
    { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
    {
      id: 3,
      name: "monitor",
      description: "Lenovo 32-inch display Monitor",
      price: 10000,
    },
    { id: 4, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
    {
      id: 5,
      name: "speakers",
      description: "Creative Desktop Speakers",
      price: 5000,
    },
    {
      id: 6,
      name: "headphones",
      description: "Sony over-the-ear wired Headphones with mic",
      price: 1500,
    },
    { id: 7, name: "mobile", description: "iPhone 12", price: 90000 },
  ];
  return (
    <div>
      {/* <Cat anyName="meow" color="black"/>
<Cat anyName="Tom" color="Orange"/>
<Cat anyName="Leo" color="Black"/> */}
      {/* <Product productName="powder" price={120}/> */}
      {/* <UserProfile anyData={userData}/> */}
      <Gadgets arr={products}/>
    </div>
  );
}
export default App;
