import axios from "axios";
import { useState } from "react";
const ImageForm=()=>{
   const [image ,setImage]=useState("")
//    const handleChange=(e)=>{
//   //const  value=e.target.value
//   console.log(e.taget.files)

//     setImage(e.taget.files[0])
   
//    }
const saveImage=(e)=>{
    e.preventDefault();
    const formdata=new FormData()
    formdata.append("file",image)
    axios.post("http://localhost:9092/upload-Image",formdata).then(res=>{
        console.log(res)

    }).then(err=>{
        console.log(err.data.message)
    })

}
   return<>
    <div className="container">
    <form>
  <div class="mb-3">
    
    <input type="file" className="form-control"
  
     onChange={e=>setImage(e.target.files[0])}
    
    />

  </div>
  <button type="submit" onClick={saveImage} class="btn btn-primary">Upload</button>

  </form>


  
  </div>
    </>

}
export default ImageForm;