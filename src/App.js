import Home from "./routes/home/home.component";
import {Route,Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signin/signin.component";

const Shop = ()=>{
  return(
    <h1>Hey there!!</h1>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/> {/* /home/shop */}
      <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
