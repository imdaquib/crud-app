import React from "react";

const UserTable = (props) =>{

   
      return(
            props.myuser.length > 0 ? (
            <table className="table table-striped table-bordered">
                  <thead className="thead-light">
                     <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Job</th>
                        <th>Country</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                        {props.myuser.map(user =>
                              <tr key={user.id}>
                              <td>{user.id}</td>
                              <td>{user.name}</td>
                              <td>{user.gender}</td>
                              <td>{user.job}</td>
                              <td>{user.country}</td>
                              <td>
                                 <button 
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => props.editMode(user)}>Edit</button>
                                 <button 
                                    className="btn btn-warning btn-sm"
                                    onClick={()=> props.deleteUser(user.id)}
                                    >Delete</button>
                              </td>
                           </tr>
                        )
                        }
                  </tbody>
            </table>
            ):(
                  'No User'
             )
      )
}

export default UserTable