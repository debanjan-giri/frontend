import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/auth';

const Dashboard = () => {
  const { data, error, isLoading } = useQuery(['user'], getUser);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching user data</div>;

  return (
    <div>
      <h1>Welcome, {data.name}</h1>
    </div>
  );
};

export default Dashboard;
