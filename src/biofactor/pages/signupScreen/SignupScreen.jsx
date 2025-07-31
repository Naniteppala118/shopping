// LoginScreen.jsx
import React, { useState } from 'react';
import Button from '../../../reusableComponents/buttonWidget/Button';
import TextField from '../../../reusableComponents/textFieldWidget/TextField';
import { FiEye, FiEyeOff, FiPhone } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import MainTextField from '../../../reusableComponents/mainTextField/MainTextField';
import './SignupScreen.css'
import Dropdown from '../../../reusableComponents/dropDownWidget/Dropdown';

const SignupScreen = () => {
    const [employeName, setEmployeName] = useState('')
    const [qualification, setQualification] = useState('')
    const navigate = useNavigate();
    const handleCreateAccount = () => {
        navigate('/')
    };



    return (
        <div className='signupSection'>
            <div className='signupBox'>
                <h3 className='heading'>Sign up</h3>
                <MainTextField label='Employe Name' required placeholder='Enter employee name' style={{ width: '600px' }} />
                <div className="sections">
                    <div className='section' >
                        <Dropdown
                            label="Select State"
                            options={[]}
                            value={qualification}
                            onChange={setQualification}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                        />
                        <Dropdown
                            label="Select mandal"
                            options={[]}
                            value={qualification}
                            onChange={setQualification}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                        />
                        <Dropdown
                            label="Select crop 1"
                            options={[]}
                            value={qualification}
                            onChange={setQualification}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                        />
                        <Dropdown
                            label="Select crop 2"
                            options={[]}
                            value={qualification}
                            onChange={setQualification}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                        />
                        <Dropdown
                            label="Select crop 3"
                            options={[]}
                            value={qualification}
                            onChange={setQualification}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                        />
                        <Dropdown
                            label="Select soil type"
                            options={[]}
                            value={qualification}
                            onChange={setQualification}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                        />

                    </div>
                    <div className='section' >
                        <Dropdown
                            label="Select district"
                            options={[]}
                            value={qualification}
                            onChange={setQualification}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                        />
                        <Dropdown
                            label="Select village"
                            options={[]}
                            value={qualification}
                            onChange={setQualification}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                        />
                        <Dropdown
                            label="No of acres"
                            options={[]}
                            value={qualification}
                            onChange={setQualification}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                        />
                        <Dropdown
                            label="No of acres"
                            options={[]}
                            value={qualification}
                            onChange={setQualification}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                        />
                        <Dropdown
                            label="No of acres"
                            options={[]}
                            value={qualification}
                            onChange={setQualification}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                        />
                        <MainTextField label='Mobile Number' required placeholder='Enter mobile number' style={{ width: '180px' }} />



                    </div>

                </div>
                <MainTextField label='Alternative Mobile no.' required placeholder='Enter alternative no.' style={{ width: '600px' }} />
                <Dropdown
                    label="Whatsapp  Yes / No"
                    options={['Yes', 'No']}
                    value={qualification}
                    onChange={setQualification}
                    placeHolder={"Select blood group"}
                    required

                />
                <Dropdown
                    label="Select Irrigation Source"
                    options={[]}
                    value={qualification}
                    onChange={setQualification}
                    placeHolder={"Select blood group"}
                    required

                />
                <Button text="Submit" style={{ height: '36px' }} onClick={handleCreateAccount} />







            </div>

        </div>
    );
};

export default SignupScreen;
