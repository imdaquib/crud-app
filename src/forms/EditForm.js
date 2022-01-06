import React,{useState, useEffect} from 'react'

const EditForm = (props) =>{
      const [users, setUsers] = useState(props.currentUser)

      useEffect(() => {
         setUsers(props.currentUser)
       }, [props]);

      const handleInputChange = (e) =>{
            const {name, value} = e.target;

            setUsers({...users, [name]:value})
      }

      


      return(
            <form
                  onSubmit={(e)=>{
                        e.preventDefault()
                        props.updateUser(users.id, users)

                  }}>
            <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Name</label>
               <div className="col-sm-10">
                  <input 
                     className="form-control"
                     name="name"
                     value={users.name}
                     onChange={handleInputChange}
                  />
               </div>
            </div>

            <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Gender</label>
               <div className="col-sm-10">
                  <input 
                     className="form-control"
                     name="gender"
                     value={users.gender}
                     onChange={handleInputChange}
                  />
               </div>
            </div>

            <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Job</label>
               <div className="col-sm-10">
                  <input 
                     className="form-control"
                     name="job"
                     value={users.job}
                     onChange={handleInputChange}
                  />
               </div>
            </div>

            <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Country</label>
               <div className="col-sm-10">
                  <input 
                     className="form-control"
                     name="country"
                     value={users.country}
                     onChange={handleInputChange}
                  />
               </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-10">
                <button className="btn btn-dark">Update</button>
               <button 
               onClick={() => props.setEditing(false)}
               className="btn btn-info"> Cancel</button>
                </div>
            </div>
            </form>
      )
}

export default EditForm