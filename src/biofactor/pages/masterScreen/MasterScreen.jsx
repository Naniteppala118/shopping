import React, { useEffect, useState } from 'react'; import './MasterScreen.css'; // Optional external styling
import SearchWidget from '../../../reusableComponents/searchWidget/SearchWidget';
import AddButtonWidget from '../../../reusableComponents/addButtonWidget/AddButtonWidget';
import { FiPlus, FiFolderPlus } from 'react-icons/fi';
import AddEmployeeModal from '../../../modules/addEmployeeModal/AddEmployeeModal';
import Pagination from '../../../reusableComponents/pagination/Pagination';
const MasterScreen = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 9;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://dummyjson.com/users');
        const data = await res.json();
        console.log("data",data);
        setUsers(data.users);
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
      <h3>Master / Employee Master</h3>

      {/* Search and Button Row */}
      <div className="search-button-row">
        <SearchWidget placeholder={"search..."} />
        <div style={{ display: 'flex', gap: '16px' }}>
          <AddButtonWidget
            text="Add From File"
            icon={<FiFolderPlus />}
            onClick={() => alert('Clicked!')}
            style={{ width: '190px' }}
          />

          <AddButtonWidget
            text="Add Employee"
            icon={<FiPlus />}
            onClick={() => setShowModal(true)}
            style={{ width: '190px' }}
          />

        </div>
        <AddEmployeeModal isOpen={showModal} onClose={() => setShowModal(false)} />

      </div>

      {/* Table */}
      <table className="employee-table">
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company Name</th>
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

export default MasterScreen;
