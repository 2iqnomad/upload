import { Link } from "react-router-dom";
import Signin from "./Signin";
import{useState} from "react"
import axios from "axios";

const Signup = () =>{
// We want to put our states here
// initialize the states
const [username , setUsername] = useState("")
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
const [phone , setPhone] = useState("")

// Define 3 states for posting data
// const [loading,setLoading]=useState("")
// const [error,setError]=useState("")
// const [success,setSuccess]=useState("")

// Define function to host data
const submit=(e)=>{
    // we want to prevent the browser  from reloading upon clicking signup button
    e.preventDefault()
    // We want to show loading
    // setLoading("Please wait . . . posting data")

    // We want to have a try and catch
    try{
        // This code works if everything goes well
        // get user inputs and put them iside form data
        const data = new FormData()
        data.append("username",username)    
        data.append("password",password)
        data .append("email",email)
        data.append("phone",phone)

        // use axios package to post data
        const responce =axios.post("https://mnkymn9n.pythonanywhere.com/api/signup",data)
    }
    catch (error){
        // this code is only ment incase there is an error
        
        
    }
    
}


    return (
        <div className="row justify-content-center mt-4" >
         <div className="card shadow col-md-6 p-4">
            <h1 className="text-center">Sign up</h1>
            {/* bind loading */}
            {/* <h2 className="text-warning"> {loading} </h2> */}

            {/* Form for user signup */}
            <form onSubmit={submit}>
                <input type="text" placeholder="Enter Username" className="form-control" onChange={(e)=>setUsername(e.target.value)}/>
                <br /> 
                {/* bind username */}
                {username}

                <input type="email" placeholder="Enter Email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                {/* bind email */}
                {email}
                <input type="password" placeholder="Enter Password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                {/* bind password */}
                {password}
                <input type="number"  placeholder="Enter phone" className="form-control" onChange={(e)=>setPhone(e.target.value)}/>
                <br />
                {/* bind phone */}
                {phone}
                <button className="btn btn-primary w-100">Sign Up</button>
                <br /> 
                <p>Already have an account? 
                <Link to='Signin'>Sign in</Link>
                </p>

            </form>
         </div>
        </div>
    )
}
export default Signup;