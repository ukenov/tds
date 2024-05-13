import { useCallback, useState } from 'react';
import { User } from 'pages/users/model';

const useEditUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const editUser = useCallback(async (userId: any, updatedUser: User) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://my-json-server.typicode.com/ukenov/db/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser)
            })
            if (!response.ok) {
                throw new Error('Failed to edit user');
            }
        } catch (error) {
            console.error('Failed to edit user', error);
            setError('Failed to edit user');
        } finally {
            setLoading(false);
        }
    }, []);

    return { editUser, loading, error };
};

export default useEditUser;
