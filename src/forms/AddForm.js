import React,{useState} from "react";

const AddUserForm = (props) =>{
      const initialFormState = {id:null, name:'', gender:'',job:'',country:''}

      const [user, setUser] = useState(initialFormState)

      const handleInputChange = (e) =>{
            const {name, value} = e.target
            console.log(e.target)

            setUser({...user, [name]:value})
      }

      return(
            <form 
                  onSubmit={(e)=>{
                        e.preventDefault();
                        
                        if(!user.name || !user.gender || !user.job || !user.country){
                              alert('Please fill in all the fields')
                        }else{
                              props.addUser(user)
                              setUser(initialFormState)
                        }
                  }}>
                  <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                         <input 
                         className="form-control form-control-sm"
                         type="text"
                         name="name"
                         value={user.name}
                         onChange={handleInputChange}
                         />
                        </div>
                  </div>

                  <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Gender</label>
                        <div className="col-sm-10">
                         <input 
                         className="form-control form-control-sm"
                         type="text"
                         name="gender"
                         value={user.gender}
                         onChange={handleInputChange}
                         />
                        </div>
                  </div>

                  <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Job</label>
                        <div className="col-sm-10">
                         <input 
                         className="form-control form-control-sm"
                         type="text"
                         name="job"
                         value={user.job}
                         onChange={handleInputChange}
                         />
                        </div>
                  </div>

                  <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Country</label>
                        <div className="col-sm-10">
                         <input 
                         className="form-control form-control-sm"
                         type="text"
                         name="country"
                         value={user.country}
                         onChange={handleInputChange}
                         />
                        </div>
                  </div>

                  <div className="form-group row">
                        <div className="col-sm-12">
                              <button className="btn btn-dark  btn-block">Add New User</button>
                        </div>
                  </div>
            </form>
      )
}

export default AddUserForm