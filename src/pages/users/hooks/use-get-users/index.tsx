import { User } from 'pages/users/model';
import { useState, useEffect } from 'react';

const useGetUsers = () => {
    const [users, setUsers] = useState<User[] | []>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [totalPages, setTotalPages] = useState<number>(0);

    const fetchUsers = async (page: number = 1, field: string = "id") => {
        try {
            setLoading(true)
            const response = await fetch(`https://my-json-server.typicode.com/ukenov/db/users?_page=${page}&_sort=${field}`);
            const totalCount = response.headers.get('x-total-count');
            const totalPagesCount = Math.ceil(parseInt(totalCount || '0', 10) / 10);
            setTotalPages(totalPagesCount);

            if (!response.ok) {
                throw new Error('Failed to fetch users data');
            }
            const usersData = await response.json();
            setUsers(usersData);
        } catch (error) {
            console.error('Error fetching users data:', error);
            setError('Failed to fetch users data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return { users, loading, error, totalPages, fetchUsers };
};

export default useGetUsers;
