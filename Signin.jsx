import axios from "axios";
import { useState } from "react";
const Signin=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    // Define the three states of hosting data
    const [loading , setLoading]=useState("")
    const [error , setError]=useState("")
    const [success , setSuccess]=useState("")

    const submit=async(e)=>{
        e.preventDefault()
        setLoading("Please wait ...")
    
    try{
        const data=new FormData

        data.append("email",email)
        data.append("password",password)

        const responce=await axios.post("https://mnkymn9n.pythonanywhere.com/api/signup",data)
        setSuccess(responce.data.message)
        setLoading("")
    
    }
    catch(error){

        setLoading("")
        setError(error.message)

    }
}
       return(
        <div className="row justify-content-center mt-5">
            <div className="card shadow col-md-6 p-4">
              <h1 className="text-center">Sign in</h1>
              {/* bind loading */}
              {loading}
              {/* bind error */}
              {error}
              {/* bind success */}
              {success}
              
              <form onSubmit={submit}>
                <input type="email" placeholder="Enter email" required className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                
                <br />
                {/* bin email */}
                {email}

                <input type="password" placeholder="Enter Password" required className="form-control" onChange={(e)=>setPassword(e.target.value)}/>  <br />
                {/* bind password */}
                {password}

                 <button type="submit" className="btn btn-primary w-100">Sign in</button>
              </form>
            </div>

        </div>
    )
}
export default Signin;