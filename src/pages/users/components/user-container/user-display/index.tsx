import React, { useState } from 'react';
import UserList from '../user-list'
import AddUser from '../../add-user';
import { User } from 'pages/users/model';
import AddUserModal from '../user-add-modal';

const DisplayUsersPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = (user: User) => {
    console.log('Submitted user:', user);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 min-h-lvh">
      {/* Modal Window */}
      <div>
        <button onClick={openModal} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 my-2 rounded">
          Add a New User
        </button>
        <AddUserModal isOpen={isOpen} onClose={closeModal}>
          {/* Content of modal */}
          <h1 className="text-xl font-bold mb-4">New User</h1>
          <AddUser onSubmit={onSubmit} />
        </AddUserModal>
      </div>
      {/* List */}
      <div>
        <UserList />
      </div>
    </div>
  );
}

export default DisplayUsersPage;