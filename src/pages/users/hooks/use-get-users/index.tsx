import User from 'pages/users/model';
import { useState, useEffect } from 'react';

const useGetUsers = () => {
    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const response = await fetch(`https://my-json-server.typicode.com/ukenov/db/users`);
            if (!response.ok) {
                throw new Error('Failed to fetch users data');
            }
            const usersData = await response.json();
            setUsers(usersData);
        } catch (error) {
            console.error('Error fetching users data:', error);
        }
        };

        fetchUsers();
    }, []);

    return users;
};

export default useGetUsers;
