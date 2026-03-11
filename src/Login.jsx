import { useEffect } from "react";

function Login() {


    useEffect(()=>{
        console.log("Login component created/updated");

        return()=>{
            console.log("Login component unmount");
            
        }
        
    },[]);

    return(
        <div>
          Username:  <input type="text"></input><br></br>
          Password:  <input type="text"></input><br></br>

          <button>LOGIN</button>
        </div>
    )
}

export default Login;