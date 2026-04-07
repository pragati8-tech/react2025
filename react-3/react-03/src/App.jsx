import Sam from "./components/sam";
import Sam1 from "./components/Sam1";

export default function App(){
     return (
         <div>
              <h1>hello App</h1>
              <Sam user="sahil" age={12}/>
              <Sam1 />
          </div>
      )

}

// export function Kashish(){
//     return (
//          <div>
//               <h1>hello kashish</h1>
//           </div>
//       )
// }
// export function Raghav(){
//     return (
//          <div>
//               <h1>hello Raghav</h1>
//           </div>
//       )
// }
// export function Shubhams(){
//     return (
//          <div>
//               <h1>hello shubhams</h1>
//           </div>
//       )
// }


//--------------------------------------------------------
//named export import {App} from './App.jsx'
// export function App(){
//      return (
//         <div>
//              <h1>hello App</h1>
//          </div>
//      )
// }
// default export
// function App(){
//     return (
//         <div>
//             <h1>hello App</h1>
//         </div>
//     )
// }
// export default App