import {useState} from 'react';
import axios from 'axios';

const Addproduct=()=>{
    const [productname,setProductname]=useState("");
    const [description,setDescription]=useState("");
    const [cost,setCost]=useState("");
    const [photo,setPhoto]=useState("");

    // states
    const [loading,setLoading]=useState("")
    const [error,setError]=useState("")
    const [success,setSuccess]=useState("")

    const submit=async(e)=>{
        e.preventDefault()
        setLoading("Loading . . .")

        try{
            const data = new FormData()
            data.append("product_name",productname)
            data.append("product_description",description)
            data.append("product_cost",cost)
            data.append("product_photo",photo)

            const responce =await axios.post("https://modcom2.pythonanywhere.com/api/add_product",data)
            setSuccess(responce.data.success)
            setLoading("")
        }
        catch(error){
            setLoading("")
            setError(error.message)
         }
        }

    return(
        <div className="row justify-content-center mt-4">
        <div className="card shadow col-md-6 p-4">

            {/* bind states */}
            {loading}
            {error}
            {success}

            <h1  className="text-center">Add product</h1>
            <form onSubmit={submit}>
                <legend>Product name</legend>
                <input type="text" className="form-control w-100" onChange={(e)=>setProductname(e.target.value)}/>
                {productname}
                <br />
                <legend>Description</legend>
                <input type="text"  className="form-control" onChange={(e)=>setDescription(e.target.value)}/>
                {description}
                <br />
                <legend>Cost(Ksh)</legend>
                <input type="number" className="form-control" onChange={(e)=>setCost(e.target.value)}/>
                {cost}
                <br />
                <legend>Product Photo</legend>
                <input type="file" className="form-control" onChange={(e)=>setPhoto(e.target.files[0])} 
                accept='image/*'/>
                {/* {photo} */}
                <br />
                <button className="btn btn-primary w-100">Add product</button>
            </form>

        </div>
        </div>
    )
}
export default Addproduct;