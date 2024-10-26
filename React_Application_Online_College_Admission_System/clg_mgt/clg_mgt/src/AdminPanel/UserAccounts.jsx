import { useEffect, useState } from 'react';
import axios from 'axios';

const UserAccounts = () => {
    const [userAccounts, setUserAccounts] = useState([]);

    useEffect(() => {
        const fetchUserAccounts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/admin/fetchAllUserAccounts');
                if (response && response.data) {
                    setUserAccounts(response.data.userAccounts);
                }
            } catch (error) {
                console.error('Error fetching user accounts:', error);
            }
        };

        fetchUserAccounts();
    }, []);

    return (
        <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
                <table className="table table-striped">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Created time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userAccounts.map((user, index) => (
                            <tr key={index} className='text-center'>
                                <td>{index + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{new Date(user.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="col-1"></div>
        </div>
    );
};

export default UserAccounts;
