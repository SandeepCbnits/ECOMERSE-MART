import React, { useEffect, useState } from "react";
import "./Profile.css";
// import ProfileImage from "../Image/profile.svg";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom";
import { produceWithPatches } from "immer";
import Address from "../Address";
const Profile = () => {
  const [image ,setImage]=useState("")
// const [profile ,setProfile]=useState({
//     fname:"",
//     lname:"",
//     email:"",
//     phoneNumber:""
// })
const navigate=useNavigate()


  
    const handleOnClick=(e)=>{
        e.preventDefault();
        const formdata=new FormData()
        formdata.append("file",image)
       formdata.append("fname",user.fname)
       formdata.append("lname",user.lname)
       formdata.append("email",user.email)
       formdata.append("phoneNumber",user.phoneNumber)
        const token= localStorage.getItem("TOKEN")
        axios.put(`http://localhost:9092/updateProfileWithImage/${token}`,formdata,{
        
        }).then(res=>{

        console.log(res.data)  
        // console.log(profile+"jagrati")
        navigate("/profile", { replace: true });
            
        }).catch(err=>{
            console.log(err)
        })
    }
   
  const [user, setUser] = useState({
      fname:"",
       lname:"",
      email:"",
       phoneNumber:""
    });
 const token= localStorage.getItem("TOKEN")
  console.log(token+"Something is coming or not")
  useEffect(() => {
    axios.get(`http://localhost:9092/getUserByToken/${token}`).then((response) => {
      console.log(response.data.image)
      
     setUser(response.data)
    });
  }, []);
  const onChangeHandler=(e)=>{
    const value=  e.target.value
    console.log({[e.target.name]:value})
    setUser({...user,[e.target.name]:value })

  }
  return (
    <div >
     
      <div className="container">
   
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="card shadow p-3 border-0 rounded-0" >
              <div className='row'>
                <div className='col-md-4'>
                
                  <img className="image" height="50px" width="50px" src={user.image} alt="kjhk"  /> 
           
                </div>
                <div className='col-md-8'>
                  <p>Hello , <p className='name'>  {user.fname} {user.lname}</p></p>
                </div>
              </div>

            </div>

            <div className="card shadow p-3 border-0 rounded-0" id="cardMenu">
             
              <div className='d-flex align-items-start'>
                <div className="nav " id="nav-tab" role="tablist">
                  <div className='row'>

                    <div className='col-md-12'>
                      <p className="tab active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" aria-controls="nav-profile" aria-selected="true" >Profile Information</p>

                      <p className="tab" id="nav-address-tab" data-bs-toggle="tab" data-bs-target="#nav-address" aria-controls="nav-address" aria-selected="true">Manage Address</p>


                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow p-3 border-0 rounded-0" id="cardMenu">
             
             <div className='d-flex align-items-start'>
               <div className="nav " id="nav-tab" role="tablist">
                 <div className='row'>

                   <div className='col-md-12'>
                     <p className="tab active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" aria-controls="nav-profile" aria-selected="true" >Profile Information</p>

                     <p className="tab" id="nav-address-tab" data-bs-toggle="tab" data-bs-target="#nav-address" aria-controls="nav-address" aria-selected="true">Manage Address</p>


                   </div>
                 </div>
               </div>
             </div>
           </div>

          </div>
          <div className="col-md-8">
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="card shadow p-3 border-0 rounded-0">
                  <div className='info'>
                    <h5>Personal Information   
                       <button type="button" class="btn btn-transparent "  data-bs-toggle="modal" data-bs-target="#exampleModal" id="openPopup">
  Edit
</button>
</h5>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">EDIT DETAILS</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="container">
     
            <form >
                <div className="row">
                <div class="mb-3">
    
    <input type="file" className="form-control"
  
     onChange={e=>setImage(e.target.files[0])}
    
    />

  </div>
            
                    <div className="col-md-6"><div className="form-group ">
                        <label for="inputFirstName4">First Name</label>
                        <input type="text" class="form-control" id="inputFirstName4" name="fname"  value={user.fname} onChange={onChangeHandler}/>
                    </div></div>
                    <div className="col-md-6"> <div className="form-group ">
                        <label for="inputLastName4">Last Name</label>
                        <input type="text" class="form-control" id="inputLastName4" name="lname"  value={user.lname} onChange={onChangeHandler}/>
                    </div></div>
                    <div className="col-md-6"><div className="form-group ">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" name="email"  value={user.email} onChange={onChangeHandler}/>
                    </div></div>
                    <div className="col-md-6"> <div className="form-group ">
                        <label for="inputMobile4">Mobile Number</label>
                        <input type="text" class="form-control" id="inputMobile4" name="phoneNumber"  value={user.phoneNumber} onChange={onChangeHandler}/>
                    </div></div>

                </div>
                <div className="text-center">
                    <button type="submit" onClick={handleOnClick} className="btn btn-primary" data-bs-dismiss="modal">EDIT DETAILS</button>
                </div>
            </form>
   
    </div>
      </div>
      
    </div>
  </div>
</div>


                    <div className='row'>
                      <div className='col-md-6'>
                        <input type="text" className='input' name="firstName" required="" autocomplete="name" tabindex="1" value={user.fname} disabled="" />

                      </div>
                      <div className='col-md-6'>
                        <input type="text" className='input' name="lastName" required="" autocomplete="name" tabindex="1" value={user.lname} disabled="" />
                      </div>
                    </div>
                  </div>
                  <div className='info'>

                    <h5>Mobile Number  </h5>
                    <div className='row'>
                      <div className='col-md-6'>
                        <input type="text" className='input' name="mobile" required="" autocomplete="name" tabindex="1" value={user.phoneNumber} disabled="" />

                      </div>

                    </div>
                  </div>

                  <div className='info'>
                    <h5>Email Address   </h5>
                    <div className='row'>
                      <div className='col-md-6'>
                        <input type="email" className='input' name="email" required="" autocomplete="name" tabindex="1" value={user.email} disabled="" />

                      </div>

                    </div>
                  </div>
                </div>
              </div>
           

            <div class="tab-pane fade" id="nav-address" role="tabpanel" aria-labelledby="nav-address-tab">
             <Address/>

            </div>
            </div>
          </div>
        </div>



      </div>


    </div>
  );
};

export default Profile;
