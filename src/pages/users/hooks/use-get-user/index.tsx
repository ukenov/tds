import { useState, useEffect } from 'react';
import { User } from 'pages/users/model';

const useGetUser = (userId: any) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUser = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://my-json-server.typicode.com/ukenov/db/users/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const userData = await response.json();
            setUser(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setError('Failed to fetch user data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [userId]);

    return { user, loading, error };
};

export default useGetUser;
