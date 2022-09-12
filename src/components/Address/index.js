import axios from "axios"
import { useState , useEffect} from "react"
import { useNavigate } from "react-router-dom"
import "./address.css"
const Address = () => {
    const [address,setAddress]=useState({
        name:"",
        phoneNumber:"",
        pincode:"",
        city:"",
        state:"",
        address:"",
        locality:"",
        landmark:""

    })
    const [addresses,setAddresses] =useState([]) 
    const navigate=useNavigate()
    const token= localStorage.getItem("TOKEN")

    const onChangeHandler=(e)=>{
      const value=  e.target.value
      console.log({[e.target.name]:value})
      setAddress({...address,[e.target.name]:value })

    } 
     useEffect(() => {
        axios.get(`http://localhost:9092/address/getAllAdressByUserId/${token}`).then((response) => {
          console.log(response.data)
           setAddresses(response.data)
           console.log(setAddresses(response.data) 
           +"jnkkj")
          console.log(addresses+"ghghjghjg")
        //  setUser(response.data)
        });
      }, [address]);
const saveAddress =(e)=>{
    e.preventDefault();

     
    axios.post(`http://localhost:9092/address/${token}`,address).then(res=>{console.log(res)
setAddress({
    name:"",
    phoneNumber:"",
    pincode:"",
    city:"",
    state:"",
    address:"",
    locality:"",
    landmark:""

})
navigate("/profile")
}).catch(err=>{console.log(err)})
}
    return <>

        <div className="card shadow p-3 border-0 rounded-0">
            <div className='info'>
                <h5>Manage Address </h5>
                <div className='row'>


                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        ADD ADDRESS
                    </button>


                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">ADD NEW ADDRESS</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form  action="" method="post">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"  name="name" onChange={onChangeHandler} value={address.name}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6"> <div className="mb-3">
                                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="10 - digit mobile number" name="phoneNumber"  onChange={onChangeHandler} value={address.phoneNumber} />
                                            </div>
                                            </div>
                                            <div className="col-md-6"> <div className="mb-3">
                                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Pincode"  onChange={onChangeHandler} name="pincode" value={address.pincode} />
                                            </div></div>
                                            <div className="col-md-6"> <div className="mb-3">
                                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Locality"  onChange={onChangeHandler} name="locality" value={address.locality} />
                                            </div></div>
                                            <div className="col-md-12"> <div className="mb-3"><textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Address(Area and Street)" name="address" onChange={onChangeHandler} value={address.address}></textarea>

                                            </div></div>
                                            <div className="col-md-6"> <div className="mb-3">
                                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City/Town/District"  onChange={onChangeHandler} name="city" value={address.city} />
                                            </div></div>
                                            <div className="col-md-6"> <div className="mb-3">
                                                <select class="form-select" aria-label="Default select example" placeholder="State"  onChange={onChangeHandler} value={address.state} name="state" >
                                                    <option selected>Select state</option>
                                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                    <option value="Assam">Assam</option>
                                                    <option value="Bihar">Bihar</option>
                                                    <option value="Chandigarh">Chandigarh</option>
                                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                                    <option value="Daman and Diu">Daman and Diu</option>
                                                    <option value="Delhi">Delhi</option>
                                                    <option value="Lakshadweep">Lakshadweep</option>
                                                    <option value="Puducherry">Puducherry</option>
                                                    <option value="Goa">Goa</option>
                                                    <option value="Gujarat">Gujarat</option>
                                                    <option value="Haryana">Haryana</option>
                                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                    <option value="Jharkhand">Jharkhand</option>
                                                    <option value="Karnataka">Karnataka</option>
                                                    <option value="Kerala">Kerala</option>
                                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                    <option value="Maharashtra">Maharashtra</option>
                                                    <option value="Manipur">Manipur</option>
                                                    <option value="Meghalaya">Meghalaya</option>
                                                    <option value="Mizoram">Mizoram</option>
                                                    <option value="Nagaland">Nagaland</option>
                                                    <option value="Odisha">Odisha</option>
                                                    <option value="Punjab">Punjab</option>
                                                    <option value="Rajasthan">Rajasthan</option>
                                                    <option value="Sikkim">Sikkim</option>
                                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                                    <option value="Telangana">Telangana</option>
                                                    <option value="Tripura">Tripura</option>
                                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                    <option value="Uttarakhand">Uttarakhand</option>
                                                    <option value="West Bengal">West Bengal</option>
                                                </select>
                                            </div></div>
                                            <div className="col-md-12"> <div className="mb-3" >
                                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Landmark"  onChange={onChangeHandler} name="landmark" value={address.landmark} />
                                            </div></div>

                                        </div>


                                        <button type="submit" onClick={saveAddress} class="btn btn-primary" data-bs-dismiss="modal" >Save</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {addresses.map((address) => (
        <div class="card rounded-0">
        <div class="card-body">
            <h5 class="card-title">{address.name}  {address.phoneNumber}</h5>

            <p className="card-text">{address.address}  {address.landmark}  {address.locality}   {address.city} <br></br>{address.state}-{address.pincode}</p>

        </div>
    </div>
      ))}
            
           
        </div>





    </>
}

export default Address;