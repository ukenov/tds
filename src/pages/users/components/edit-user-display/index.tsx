import { useParams } from 'react-router-dom';
import EditUser from '../edit-user';

const DisplayEditUserPage = () => {
  const { userId } = useParams<{ userId: string }>()

  return (
    <div className="container mx-auto mt-8 h-screen">
      <div>
        <EditUser userId={userId} />
      </div>
    </div>
  );
}

export default DisplayEditUserPage;