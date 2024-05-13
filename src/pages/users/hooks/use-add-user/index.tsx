import { useCallback, useState } from 'react';
import { User } from 'pages/users/model';

const useAddUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const addUser = useCallback(async (user: User) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://my-json-server.typicode.com/ukenov/db/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            if (!response.ok) {
                throw new Error('Failed to add user');
            }
        } catch (error) {
            console.error('Failed to add user', error);
            setError('Failed to add user');
        } finally {
            setLoading(false);
        }
    }, []);

    return { addUser, loading, error };
};

export default useAddUser;
