import React from 'react';
import UserList from '../user-list'

const DisplayUsersPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Users Page</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <UserList />
      </div>
    </div>
  );
}

export default DisplayUsersPage;