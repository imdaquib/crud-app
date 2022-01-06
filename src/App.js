import React, { useState, useEffect } from 'react';
import AddUserForm from './forms/AddForm';
import EditForm from './forms/EditForm';
import UserTable from './UserTable';

const App = () => {
  const userdata = [
    // {id:1, name:'Shahan',gender:'Male', job:'Actor', country:'Istanbul'}
  ];

  const initialFormState = {
    id: null,
    name: '',
    gender: '',
    job: '',
    country: '',
  };
  const [users, setUsers] = useState(userdata);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // Show data
  useEffect(() => {
    const showData = async () => {
      const dataFromdb = await FetchData();
      setUsers(dataFromdb);
    };
    showData();
  }, []);

  /// Fetch data from db.json
  const FetchData = async () => {
    const res = await fetch('http://localhost:5000/datas');
    const data = res.json();

    return data;
  };

  /// add user
  const addUser = async (user) => {
    const res = await fetch('http://localhost:5000/datas', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    setUsers([...users, data]);
  };

  // delete User
  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/datas/${id}`, {
      method: 'delete',
    });

    setUsers(users.filter((user) => user.id !== id));
  };

  /// edit Mode
  const editMode = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      gender: user.gender,
      job: user.job,
      country: user.country,
    });
  };

  /// Update User
  const updateUser = async (id, dataUpdate) => {
    setEditing(false);

    const res = await fetch(`http://localhost:5000/datas/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(dataUpdate),
    });
    const data = await res.json();
    setUsers(users.map((user) => (user.id === id ? data : user)));
  };

  return (
    <div className='container mt-4'>
      <h1>CRUD REACT APPLICATION</h1>

      <div className='row mt-4'>
        {editing ? (
          <div className='col-md-6'>
            <h2>Edit Users</h2>
            <EditForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div className='col-md-6'>
            <h2>Add User</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}

        <div className='col-md-6'>
          <h2>View User</h2>
          <UserTable
            myuser={users}
            deleteUser={deleteUser}
            editMode={editMode}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
