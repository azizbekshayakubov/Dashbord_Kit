import { BrowserRouter as Router , Route, Routes } from "react-router-dom";

import {Overview,Tickets} from "./pages"

import Sidebar from "./container/Sidebar";

import "./App.css"


function App() {
  
return (
  <div className="header">
  <Router>
    <Sidebar/>
    <Routes>
      <Route path="/overview" element = {<Overview/>}/>
      <Route path="/tickets" element = {<Tickets/>}/>
    </Routes>

  </Router>

  </div>
 );

   
}


export default App










//   let [count, setCount] = useState(0);

//   let increment =()=>{
     
//     return setCount(count +1)
//   }
//  let decerment=()=>{
//    if (count>0) {
//     return setCount(count -1)
//    }
//  }

  

// return (
//   <>
//   <h1>Count :{count}</h1>
//   <button onClick={decerment}>-1</button>
//   <button onClick={increment}>+1</button>



//   </>
//  );

// }

// export default App
















  // let [name, setName] = useState(null)
  // const changename1=()=>{
  //   return setName( name = "Bek")
  // };

  // const changename2=()=>{
  //   return setName( name = "Azizbek")
  // };


  // return (
  //   <>
  //    <h1>My name is:{name}</h1> 
  //            <button onClick={changename1}>ChangeName1</button>
  //    <button onClick={changename2}>ChangeName2</button>
  //   </>
  // )
