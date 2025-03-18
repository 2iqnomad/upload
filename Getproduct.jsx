import axios from "axios";
import { useState,useEffect } from "react";
const Getproduct=()=>{

    // define the three states
    const [loading , setLoading]=useState("")
    const [error , setError]=useState("")
    const [products , setProducts]=useState([])
    // function to get products
    const Getproducts = async()=>{
     setLoading("Loading . . .")
     try {
        const responce = await axios.get("https://modcom2.pythonanywhere.com/api/get_product_details")
        setProducts(responce.data)
        console.log(responce)
        setLoading("")
     } catch (error) {
        setLoading("")
        setError(error.message)
     }
    }
    // call the functions
    // Getproducts()

    useEffect(()=>{
        Getproducts()
    },[])
    const image_path="https://modcom2.pythonanywhere.com/static/images/"

    return(
        <div className="row container-fluid">
           <h1 className="text-center text-success">Available products</h1>
             {/* mapping */}
             {products.map(product=>(

           <div className="col-md-3 justify-content-center mb-4">
            <div className="card shadow p-4">
                 {/* image goes here */} 
                 <img src={image_path+product.product_photo} alt="" className="productimage"/>
                 <div className="card-boby">
                    <h5 className="text-info">{product.product_name}</h5>
                    <p className="text-muted">{product.product_description}</p>
                    <b className="text-warning">{product.product_cost}</b>
                    <br />
                    <button className="btn btn-dark w-100 mt-2">Purchase now</button>
                 </div>
            </div>



           </div>

                ))}
           {/* end of mapping */}
                
        </div>
    )
}
export default Getproduct;