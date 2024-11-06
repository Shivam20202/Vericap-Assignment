import Profile from '../components/Profile';
import UserTable from '../components/UserTable';
import Navbar from '../components/Navbar';
import '../App.css';

const Dashboard = () => {
    return (
        <div className="main-content">
            
            <Navbar />
            <Profile />
            <UserTable />
        </div>
    );
};

export default Dashboard;
