import React, { useState } from 'react';
import MainTextField from '../../reusableComponents/mainTextField/MainTextField';
import RadioGroup from '../../reusableComponents/radioGroupWidget/RadioGroup';
import Dropdown from '../../reusableComponents/dropDownWidget/Dropdown';
import './EmployeeDetailsModule.css'
import DateWidget from '../../reusableComponents/dateWidget/DateWidget';

const EmployeeDetailsModule = () => {
    const [username, setUsername] = useState('');
    const [salutation, setSalutation] = useState('');
    const [gender, setGender] = useState('');
    const [qualification, setQualification] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    return (
        <div className='mainSection'>
            <div className='subSection'>
                <RadioGroup
                    label="Salutation"
                    name="salutation"
                    options={['Mr', 'Ms', 'Dr']}
                    selectedValue={salutation}
                    onChange={setSalutation}
                    required
                />

                <MainTextField label='Middle Name' placeholder='Enter middle name' style={{width:'550px'}} />
                <RadioGroup
                    label="Gender"
                    name="Gender"
                    options={['Male', 'Female']}
                    selectedValue={gender}
                    onChange={setGender}
                    required
                />
                <DateWidget
                    label="Select Date"
                    name="dob"
                    value={selectedDate}
                    onChange={setSelectedDate}
                    required={true}
                />
                <Dropdown
                    label="Blood Group"
                    options={['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']}
                    value={qualification}
                    onChange={setQualification}
                    placeHolder={"Select blood group"}
                    required
                />
            </div>
            <div className='subSection' >
                <MainTextField label='First Name' placeholder='Enter First name' required style={{width:'550px'}}/>
                <MainTextField label='Last Name' placeholder='Enter last name' required style={{width:'550px'}}/>
                <Dropdown
                    label="Educational Qualification"
                    options={['10th', '12th', 'UG', 'PG', 'Diploma']}
                    value={qualification}
                    onChange={setQualification}
                    placeHolder={"Select educational qualification"}
                    required
                />
                <MainTextField label='Nationality' placeholder='Enter nationality' required style={{width:'550px'}}/>
                <MainTextField label='Employee Number' placeholder='Enter employee number' required style={{width:'550px'}}/>
            </div>


        </div>
    );
}

export default EmployeeDetailsModule;