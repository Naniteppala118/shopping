// LoginScreen.jsx
import React, { useState } from 'react';
import Button from '../../../reusableComponents/buttonWidget/Button';
import TextField from '../../../reusableComponents/textFieldWidget/TextField';
import { FiEye, FiEyeOff, FiPhone } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import MainTextField from '../../../reusableComponents/mainTextField/MainTextField';
import './SignupScreen.css'
import Dropdown from '../../../reusableComponents/dropDownWidget/Dropdown';
import ProfilePictureUploader from '../../../reusableComponents/profilePicUploader/ProfilePicUploader';

const SignupScreen = () => {
    const [employeName, setEmployeName] = useState('')
    const [qualification, setQualification] = useState('')
    const [employeeName, setEmployeeName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [altMobileNumber, setAltMobileNumber] = useState('');
    const [state, setState] = useState('');
    const [mandal, setMandal] = useState('');
    const [district, setDistrict] = useState('');
    const [village, setVillage] = useState('');
    const [crop1, setCrop1] = useState('');
    const [crop2, setCrop2] = useState('');
    const [crop3, setCrop3] = useState('');
    const [soilType, setSoilType] = useState('');
    const [acres1, setAcres1] = useState('');
    const [acres2, setAcres2] = useState('');
    const [acres3, setAcres3] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [irrigation, setIrrigation] = useState('');
    const [errors, setErrors] = useState({});


    const navigate = useNavigate();
    const clearError = (field) => {
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }

    };
    const handleDropdownChange = (setter, fieldName) => (value) => {
        setter(value);
        if (errors[fieldName]) {
            setErrors(prev => ({ ...prev, [fieldName]: '' }));
        }
    };

    const handleCreateAccount = () => {
        const newErrors = {};

        if (!employeeName.trim()) newErrors.employeeName = 'Employee name is required';
        if (!mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required';
        if (!altMobileNumber.trim()) newErrors.altMobileNumber = 'Alternative number is required';
        if (!state) newErrors.state = 'State is required';
        if (!mandal) newErrors.mandal = 'Mandal is required';
        if (!district) newErrors.district = 'District is required';
        if (!village) newErrors.village = 'Village is required';
        if (!crop1) newErrors.crop1 = 'Crop 1 is required';
        if (!crop2) newErrors.crop2 = 'Crop 2 is required';
        if (!crop3) newErrors.crop3 = 'Crop 3 is required';
        if (!soilType) newErrors.soilType = 'Soil type is required';
        if (!acres1) newErrors.acres1 = 'Acres 1 is required';
        if (!acres2) newErrors.acres2 = 'Acres 2 is required';
        if (!acres3) newErrors.acres3 = 'Acres 3 is required';
        if (!whatsapp) newErrors.whatsapp = 'Whatsapp selection is required';
        if (!irrigation) newErrors.irrigation = 'Irrigation source is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            navigate('/');
        }
    };




    return (
        <div className='signupSection'>
            <div className='signupBox'>
                <h3 className='heading'>Sign up</h3>
                <div className="profilePic">
                    <ProfilePictureUploader size={80} />
                </div>
                
                <MainTextField label='Employe Name' value={employeeName}
                    onChange={e => {
                        setEmployeeName(e.target.value);
                        clearError('employeeName');
                    }}

                    error={errors.employeeName} required placeholder='Enter employee name' style={{ width: '600px' }} />
                <div className="sections">
                    <div className='section' >
                        <Dropdown
                            label="Select State"
                            options={['AP', 'TS']}
                            value={state}
                            onChange={handleDropdownChange(setState, 'state')}
                            required
                            error={errors.state}


                            style={{ width: '180px' }}
                        />
                        <Dropdown
                            label="Select district"
                            options={['1', '2']}
                            value={district}
                            onChange={handleDropdownChange(setDistrict, 'district')}
                            required
                            style={{ width: '180px' }}
                            error={errors.district}
                        />
                        <Dropdown
                            label="Select mandal"
                            options={['1', '2']}
                            value={mandal}
                            onChange={handleDropdownChange(setMandal, 'mandal')}
                            placeHolder={"Select blood group"}
                            required
                            error={errors.mandal}
                            style={{ width: '180px' }}
                        />
                        <Dropdown
                            label="Select village"
                            options={['1', '2']}
                            value={village}
                            onChange={handleDropdownChange(setVillage, 'village')}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                            error={errors.village}
                        />
                        <Dropdown
                            label="Select crop 1"
                            options={['1', '2']}
                            value={crop1}
                            onChange={handleDropdownChange(setCrop1, 'crop1')}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                            error={errors.crop1}
                        />
                        <Dropdown
                            label="No of acres"
                            options={['1', '2']}
                            value={acres1}
                            onChange={handleDropdownChange(setAcres1, 'acres1')}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                            error={errors.acres1}
                        />
                        <Dropdown
                            label="Select crop 2"
                            options={['1', '2']}
                            value={crop2}
                            onChange={handleDropdownChange(setCrop2, 'crop2')}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                            error={errors.crop2}
                        />
                        <Dropdown
                            label="No of acres"
                            options={['1', '2']}
                            value={acres2}
                            onChange={handleDropdownChange(setAcres2, 'acres2')}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                            error={errors.acres2}
                        />
                        <Dropdown
                            label="Select crop 3"
                            options={['1', '2']}
                            value={crop3}
                            onChange={handleDropdownChange(setCrop3, 'crop3')}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                            error={errors.crop3}
                        />
                        <Dropdown
                            label="No of acres"
                            options={['1', '2']}
                            value={acres3}
                            onChange={handleDropdownChange(setAcres3, 'acres3')}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                            error={errors.acres3}
                        />
                        <Dropdown
                            label="Select soil type"
                            options={['1', '2']}
                            value={soilType}
                            onChange={handleDropdownChange(setSoilType, 'soilType')}
                            placeHolder={"Select blood group"}
                            required
                            style={{ width: '180px' }}
                            error={errors.soilType}
                        />






                        <MainTextField label='Mobile no.' required placeholder='Enter Mobile no.' style={{ width: '180px' }} error={errors.mobileNumber} value={mobileNumber}
                            onChange={(e) => {
                                setMobileNumber(e.target.value);
                                clearError('mobileNumber');
                            }

                            } />



                    </div>

                </div>
                <MainTextField label='Alternative Mobile no.' required placeholder='Enter alternative no.' style={{ width: '600px' }} error={errors.altMobileNumber} value={altMobileNumber}
                    onChange={(e) => {
                        setAltMobileNumber(e.target.value);
                        clearError('altMobileNumber');
                    }} />
                <Dropdown
                    label="Whatsapp  Yes / No"
                    options={['Yes', 'No']}
                    value={whatsapp}
                    onChange={handleDropdownChange(setWhatsapp, 'whatsapp')}
                    placeHolder={"Select blood group"}
                    required
                    error={errors.whatsapp}

                />
                <Dropdown
                    label="Select Irrigation Source"
                    options={['1', '2']}
                    value={irrigation}
                    onChange={handleDropdownChange(setIrrigation, 'irrigation')}
                    placeHolder={"Select blood group"}
                    required
                    error={errors.irrigation}

                />
                <Button text="Submit" style={{ height: '36px' }} onClick={handleCreateAccount} />







            </div>

        </div>
    );
};

export default SignupScreen;
