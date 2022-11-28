import { getAuth } from "firebase/auth";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import app from "./firebase/firebase.init";
import RegisterReactBoostrap from "./RegisterReactBoostrap";
const auth= getAuth(app)
function App() {
  
  const handleRegister=(event)=>{
    event.preventDefault();// preven reloading of page
    const email=event.target.email.value;
    const pass=event.target.pwd.value
     console.log(email,pass)//get submitted input
  }
  // const handleEmailChange=event=>{
  //   console.log(event.target.value)// changes input value according to typing
  // }
  // const handlePassChange=event=>{
  //   console.log(event.target.value)// changes input value according to typing
  // }

  const handleEmailBlur=event=>{
    console.log(event.target.value)// changes input value according to typing and won't console every time
  }
  const handlePassBlur=event=>{
    console.log(event.target.value)// changes input value according to typing won't console every time
  }


  return (
    <div className="">
     <RegisterReactBoostrap></RegisterReactBoostrap>
          
    </div>
  );
}

export default App;
