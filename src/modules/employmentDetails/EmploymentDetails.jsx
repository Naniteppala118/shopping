import React, { useState } from 'react';
import MainTextField from '../../reusableComponents/mainTextField/MainTextField';
import RadioGroup from '../../reusableComponents/radioGroupWidget/RadioGroup';
import Dropdown from '../../reusableComponents/dropDownWidget/Dropdown';
import './EmploymentDetails.css'
import DateWidget from '../../reusableComponents/dateWidget/DateWidget';


const EmploymentDetails = () => {
    const [username, setUsername] = useState('');
    const [salutation, setSalutation] = useState('');
    const [gender, setGender] = useState('');
    const [qualification, setQualification] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    return (
        <div className='mainSection'>
            <div className='subSection'>
                <DateWidget
                    label="Joining Date"
                    name="dob"
                    value={selectedDate}
                    onChange={setSelectedDate}
                    required={true}
                />

                <Dropdown
                    label="Business Unit"
                    options={['1', '2']}
                    value={qualification}
                    onChange={setQualification}
                    placeHolder={"Select blood group"}
                    required
                />
                <Dropdown
                    label="State"
                    options={['1', '2']}
                    value={qualification}
                    onChange={setQualification}
                    placeHolder={"Select blood group"}
                    required
                />
                <Dropdown
                    label="Designation"
                    options={['1', '2']}
                    value={qualification}
                    onChange={setQualification}
                    placeHolder={"Select blood group"}
                    required
                />
                <MainTextField label='Location' placeholder='Enter First name' required style={{ width: '550px' }} />

                <MainTextField label='Notice Period (in days)' placeholder='Enter First name' required style={{ width: '550px' }} />

            </div>
            <div className='subSection' >
                
                <Dropdown
                    label="Job Title"
                    options={['1','2']}
                    value={qualification}
                    onChange={setQualification}
                    placeHolder={"Select educational qualification"}
                    required
                />
                <Dropdown
                    label="Zone"
                    options={['1','2']}
                    value={qualification}
                    onChange={setQualification}
                    placeHolder={"Select educational qualification"}
                    required
                />
                <Dropdown
                    label="Department"
                    options={['1','2']}
                    value={qualification}
                    onChange={setQualification}
                    placeHolder={"Select educational qualification"}
                    required
                />
                <Dropdown
                    label="Reporting Manager"
                    options={['1','2']}
                    value={qualification}
                    onChange={setQualification}
                    placeHolder={"Select educational qualification"}
                    required
                />
                <RadioGroup
                    label="Worker Type"
                    name="salutation"
                    options={['Regular','Part-Time','Consultant']}
                    selectedValue={salutation}
                    onChange={setSalutation}
                    required
                />
                <MainTextField label='Probation Policy (in months)' placeholder='Enter employee number' required style={{ width: '550px' }} />
            </div>


        </div>
    );
}

export default EmploymentDetails;