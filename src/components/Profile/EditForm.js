// import axios from "axios"
// import { useState } from "react"

// import "./editform.css"
// import { useNavigate } from "react-router-dom";
// const EditForm = () => {
// const [image ,setImage]=useState("")
// const [profile ,setProfile]=useState({
//     fname:"",
//     lname:"",
//     email:"",
//     phoneNumber:""
// })
// const navigate=useNavigate()

//     const onChangeHandler=(e)=>{
//       const value=  e.target.value
//       console.log({[e.target.name]:value})
//       setProfile({...profile,[e.target.name]:value })

//     }
  
//     const handleOnClick=(e)=>{
//         e.preventDefault();
//         const formdata=new FormData()
//         formdata.append("file",image)
//        formdata.append("fname",profile.fname)
//        formdata.append("lname",profile.lname)
//        formdata.append("email",profile.email)
//        formdata.append("phoneNumber",profile.phoneNumber)
//         const token= localStorage.getItem("TOKEN")
//         axios.put(`http://localhost:9092/updateProfileWithImage/${token}`,formdata,{
        
//         }).then(res=>{

//         console.log(res.data)  
//         // console.log(profile+"jagrati")
//         navigate("/profile", { replace: true });
            
//         }).catch(err=>{
//             console.log(err)
//         })
//     }
   
//     return <div className="container">
//         <div className="card">
//             <form >
//                 <div className="row">
//                 <div class="mb-3">
    
//     <input type="file" className="form-control"
  
//      onChange={e=>setImage(e.target.files[0])}
    
//     />

//   </div>
//                     {/* <div className="col-md-6"><div className="form-group  col-md-6">
//                         <label for="exampleFormControlFile1">Choose Profile Photo</label>
//                         <input type="file" class="form-control-file" id="exampleFormControlFile1"  name="imagePath" value={profile.imagePath}  onChange={onChangeHandler}/>
//                     </div></div> */}
//                     {/* <div className="col-md-6"><div className="form-group ">
//                         <label for="inputFirstName4">Password</label>
//                         <input type="password" class="form-control" id="inputFirstName4" name="password" value={profile.password}  onChange={onChangeHandler}/>
//                     </div></div> */}
//                     <div className="col-md-6"><div className="form-group ">
//                         <label for="inputFirstName4">First Name</label>
//                         <input type="text" class="form-control" id="inputFirstName4" name="fname" value={profile.fname} onChange={onChangeHandler}/>
//                     </div></div>
//                     <div className="col-md-6"> <div className="form-group ">
//                         <label for="inputLastName4">Last Name</label>
//                         <input type="text" class="form-control" id="inputLastName4" name="lname"  value={profile.lname} onChange={onChangeHandler}/>
//                     </div></div>
//                     <div className="col-md-6"><div className="form-group ">
//                         <label for="inputEmail4">Email</label>
//                         <input type="email" class="form-control" id="inputEmail4" name="email"  value={profile.email} onChange={onChangeHandler}/>
//                     </div></div>
//                     <div className="col-md-6"> <div className="form-group ">
//                         <label for="inputMobile4">Mobile Number</label>
//                         <input type="text" class="form-control" id="inputMobile4" name="phoneNumber"  value={profile.phoneNumber} onChange={onChangeHandler}/>
//                     </div></div>

//                 </div>
//                 <div className="text-center">
//                     <button type="submit" onClick={handleOnClick} className="btn btn-primary">EDIT DETAILS</button>
//                 </div>
//             </form>
//         </div>
//     </div>
// }
// export default EditForm;