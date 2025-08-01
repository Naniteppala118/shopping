import React, { useEffect, useState } from 'react'; import '../masterScreen/MasterScreen.css'; // Optional external styling
import SearchWidget from '../../../reusableComponents/searchWidget/SearchWidget';
import AddButtonWidget from '../../../reusableComponents/addButtonWidget/AddButtonWidget';
import { FiPlus, FiFolderPlus } from 'react-icons/fi';
import Pagination from '../../../reusableComponents/pagination/Pagination';
import ToggleButton from '../../../reusableComponents/toggleButton/ToggleButton'
import Popup from '../../../reusableComponents/popup/Popup';
import MainTextField from '../../../reusableComponents/mainTextField/MainTextField';
import InputWidget from '../../../reusableComponents/inputWidget/InputWidget';
import './ZoneMasterScreen.css'
import Button from '../../../reusableComponents/buttonWidget/Button';

const ZoneMasterScreen = () => {
    const [users, setUsers] = useState([]);
    const [description, setDescription] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [toggleStates, setToggleStates] = useState({});

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 9;
    const handleToggle = (userId) => {
        setToggleStates(prev => ({
            ...prev,
            [userId]: !prev[userId]
        }));
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('https://dummyjson.com/users');
                const data = await res.json();
                console.log("data", data);
                setUsers(data.users);

                const initialToggles = {};
                data.users.forEach(user => {
                    initialToggles[user.id] = false;
                });
                setToggleStates(initialToggles);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };

        fetchUsers();
    }, []);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(users.length / usersPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className="master-container">
            <h3>Master / Zone Master</h3>

            {/* Search and Button Row */}
            <div className="search-button-row">
                <SearchWidget placeholder={"search..."} />
                <div style={{ display: 'flex', gap: '16px' }}>


                    <AddButtonWidget
                        text="Add Zone"
                        icon={<FiPlus />}
                        onClick={() => setShowPopup(true)}
                        style={{ width: '190px' }}
                    />
                    <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
                        <h3 className='heading'>Add Zone</h3>
                        <MainTextField label='Zone Name' required placeholder='Enter zone name' />
                        <InputWidget
                            label="Description"
                            placeholder="Enter description..."
                            value={description}
                            onChange={setDescription}
                            rows={3}
                            required
                        />
                        <div className="buttonsFotter">
                            <AddButtonWidget
                            onClick={() => setShowPopup(false)}
                                text="Cancel"
                                style={{ padding: '8px 10px', color: '#ff0000ff', border: '1px solid', backgroundColor: '#ffffff' }}
                            />
                            <AddButtonWidget
                                text={'Add Zone'}
                                style={{ padding: '8px 10px' }}
                            />
                        </div>
                    </Popup>

                </div>


            </div>

            {/* Table */}
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.length > 0 ? (
                        currentUsers.map((user, index) => (
                            <tr key={user.id}>
                                <td>{indexOfFirstUser + index + 1}</td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.company?.name}</td>
                                <td>
                                    <ToggleButton
                                        isToggled={toggleStates[user.id] || false}
                                        onToggle={() => handleToggle(user.id)}
                                    />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">Loading users...</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="pagination-container">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />

            </div>




            {/*<div className="pagination-container">
        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((num) => (
          <button
            key={num}
            onClick={() => handlePageChange(num)}
            className={`page-button ${currentPage === num ? "active" : ""}`}
          >
            {num}
          </button>
        ))}
      </div>*/}
        </div>
    );
};

export default ZoneMasterScreen;
