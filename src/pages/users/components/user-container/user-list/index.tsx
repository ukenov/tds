import { useState } from 'react';
import { Link } from 'react-router-dom';
import useGetUsers from 'pages/users/hooks/use-get-users';
import useDeleteUser from 'pages/users/hooks/use-delete-user';
import Pagination from '../../pagination';

const UserList = () => {
  const { users, loading: getUsersLoading, error: getUsersError, totalPages: getUsersTotalPages, fetchUsers } = useGetUsers();
  const { deleteUser, loading: deleteUserLoading, error: deleteUserError  } = useDeleteUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>("id");

  const handleDelete = async (userId: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    
    if (confirmed) {
      await deleteUser(userId);
      await fetchUsers(currentPage);
    }
  };

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
    await fetchUsers(page);
  };

  const handleSort = async (field: string) => {
    setSortField(field);
    await fetchUsers(currentPage, field);
  };

  if (getUsersLoading || deleteUserLoading) {
    return (
      <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
          width="48" height="48">
          <path
            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
            stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path
            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
            stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
          </path>
        </svg>
      </div>
    );
  }

  if (getUsersError || deleteUserError) {
    return <div>Error occurred. Please try again later.</div>;
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${sortField === 'firstname' ? 'text-gray-900' : 'text-gray-500'} ${sortField === 'firstname' && 'hover:text-gray-900'}`} onClick={() => handleSort('firstname')}>
              Name {sortField === 'firstname' && <span className="ml-1">▼</span>}
            </th>
            <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${sortField === 'email' ? 'text-gray-900' : 'text-gray-500'} ${sortField === 'email' && 'hover:text-gray-900'}`} onClick={() => handleSort('email')}>
              Email {sortField === 'email' && <span className="ml-1">▼</span>}
            </th>
            <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${sortField === 'skills' ? 'text-gray-900' : 'text-gray-500'} ${sortField === 'skills' && 'hover:text-gray-900'}`} onClick={() => handleSort('skills')}>
              Skills {sortField === 'skills' && <span className="ml-1">▼</span>}
            </th>  
            <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${sortField === 'dateOfRegistration' ? 'text-gray-900' : 'text-gray-500'} ${sortField === 'dateOfRegistration' && 'hover:text-gray-900'}`} onClick={() => handleSort('dateOfRegistration')}>
              Registered On {sortField === 'dateOfRegistration' && <span className="ml-1">▼</span>}
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map(user => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{`${user.firstname} ${user.lastname}`}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{user.skills.join(', ')}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{new Date(user.dateOfRegistration).toDateString()}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/user/edit/${user.id}`} className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</Link>
                <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPages={getUsersTotalPages} onPageChange={handlePageChange} />
    </div>
  );
}

export default UserList;
