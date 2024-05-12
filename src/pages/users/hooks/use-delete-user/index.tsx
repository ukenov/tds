import { useCallback, useState } from 'react';

const useDeleteUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const deleteUser = useCallback(async (userId: number) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://my-json-server.typicode.com/ukenov/db/users/${userId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
        } catch (error) {
            console.error('Failed to delete user', error);
            setError('Failed to delete user');
        } finally {
            setLoading(false);
        }
    }, []);

    return { deleteUser, loading, error };
};

export default useDeleteUser;
