import React, { useState } from 'react';
import { User } from 'pages/users/model';
import { useParams } from 'react-router-dom';
import EditUser from '../edit-user';

const DisplayEditUserPage: React.FC = () => {
    const { userId } = useParams<{ userId: string }>()

  const onSubmit = () => {
    console.log('Edit user');
  };

  return (
    <div className="container mx-auto mt-8 h-screen">
      {/* List */}
      <div>
        <EditUser onSubmit={onSubmit} userId={userId} />
      </div>
    </div>
  );
}

export default DisplayEditUserPage;