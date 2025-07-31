import './FamilyDetails.css';
import React, { useState } from 'react';
import MainTextField from '../../reusableComponents/mainTextField/MainTextField';
import DateWidget from '../../reusableComponents/dateWidget/DateWidget';
import BrowseFileWidget from '../../reusableComponents/browseFileWidget/BrowseFileWidget';
import AddButtonWidget from '../../reusableComponents/addButtonWidget/AddButtonWidget';
import { FiPlus, FiTrash } from 'react-icons/fi';
import RadioGroup from '../../reusableComponents/radioGroupWidget/RadioGroup';

const FamilyDetails = () => {
    const [isMarried, setIsMarried] = useState(false);
    const [selectedFatherDOB, setSelectedFatherDOB] = useState('');
    const [selectedMotherDOB, setSelectedMotherDOB] = useState('');
    const [selectedWifeDOB, setSelectedWifeDOB] = useState('');
    const [children, setChildren] = useState([]);
    const [gender, setGender] = useState('');


    return (
        <div className='familyDetailsSection'>
            <div className='maritalSection'>
                <h4 className="label">Marital Status:</h4>
                <div className="maritalCheckbox">
                    <input
                        type="checkbox"
                        id="marital"
                        className='checkbox'
                        checked={isMarried}
                        onChange={() => setIsMarried(!isMarried)}
                    />
                    <label htmlFor="marital">Married</label>
                </div>
            </div>

            {/* Unmarried: Show Father/Mother Details */}
            {!isMarried && (
                <>
                    <div className='section'>
                        <MainTextField label='Father Name' placeholder='Enter Father name' required style={{ width: '330px' }} />
                        <MainTextField label='Father Occupation' placeholder='Enter Father Occupation' style={{ width: '330px' }} />
                        <DateWidget
                            label="Father Date of Birth"
                            name="fatherDob"
                            value={selectedFatherDOB}
                            onChange={setSelectedFatherDOB}
                            required={true}
                            style={{ width: '330px' }}
                        />
                    </div>

                    <div className='section'>
                        <MainTextField label='Mother Name' placeholder='Enter Mother name' required style={{ width: '330px' }} />
                        <MainTextField label='Mother Occupation' placeholder='Enter Mother Occupation' style={{ width: '330px' }} />
                        <DateWidget
                            label="Mother Date of Birth"
                            name="motherDob"
                            value={selectedMotherDOB}
                            onChange={setSelectedMotherDOB}
                            required={true}
                            style={{ width: '330px' }}
                        />
                    </div>

                    <div className='unMarriedPhotoSection'>
                        <BrowseFileWidget label="Father Photo" required onFileChange={(file) => console.log(file)} />
                        <BrowseFileWidget label="Mother Photo" required onFileChange={(file) => console.log(file)} />
                    </div>
                </>
            )}

            {/* Married: Show Wife Details */}
            {isMarried && (
                <>
                    <div className='section'>
                        <MainTextField label='Father Name' placeholder='Enter Father name' required style={{ width: '330px' }} />
                        <MainTextField label='Father Occupation' placeholder='Enter Father Occupation' style={{ width: '330px' }} />
                        <DateWidget
                            label="Father Date of Birth"
                            name="fatherDob"
                            value={selectedFatherDOB}
                            onChange={setSelectedFatherDOB}
                            required={true}
                            style={{ width: '330px' }}
                        />
                    </div>
                    <div className='section'>
                        <MainTextField label='Mother Name' placeholder='Enter Mother name' required style={{ width: '330px' }} />
                        <MainTextField label='Mother Occupation' placeholder='Enter Mother Occupation' style={{ width: '330px' }} />
                        <DateWidget
                            label="Mother Date of Birth"
                            name="motherDob"
                            value={selectedMotherDOB}
                            onChange={setSelectedMotherDOB}
                            required={true}
                            style={{ width: '330px' }}
                        />
                    </div>


                    <div className='section'>
                        <MainTextField label='Wife Name' placeholder='Enter Wife name' required style={{ width: '330px' }} />
                        <DateWidget
                            label="Wife Date of Birth"
                            name="wifeDob"
                            value={selectedWifeDOB}
                            onChange={setSelectedWifeDOB}
                            required={true}
                            style={{ width: '330px' }}
                        />
                        <div className="addChildButton">
                            <AddButtonWidget
                                text="Add Child"
                                icon={<FiPlus />}
                                onClick={() => {
                                    if (children.length < 2) {
                                        setChildren([...children, { name: '', dob: '', gender: '', file: null }]);
                                    }
                                }}
                                style={{ width: '100px', gap: '2px' }}
                                fontSize={"12px"}
                            />
                        </div>

                    </div>
                    {children.map((child, index) => (
                        <div key={index} className='childSection' style={{}}>
                            <MainTextField
                                label={`Child ${index + 1} Name`}
                                placeholder='Enter Child Name'
                                required
                                style={{ width: '330px' }}
                            />

                            <DateWidget
                                label={`Child ${index + 1} Date of Birth`}
                                name={`childDob${index}`}
                                value={child.dob}
                                onChange={(dob) => {
                                    const updated = [...children];
                                    updated[index].dob = dob;
                                    setChildren(updated);
                                }}
                                required={true}
                                style={{ width: '330px' }}
                            />

                            {/*<RadioGroup
                                label={`Child ${index + 1} Gender`}
                                name={`childGender${index}`}
                                options={['Male', 'Female']}
                                selectedValue={child.gender}
                                onChange={(gender) => {
                                    const updated = [...children];
                                    updated[index].gender = gender;
                                    setChildren(updated);
                                }}
                                required
                            />*/}



                            {/* Delete Icon at the Bottom Right */}
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    gap: '16px', // optional spacing between radio and button
                                    marginTop: '8px',
                                }}
                            >
                                <div style={{ flex: 1 }}>
                                    <RadioGroup
                                        label={`Child ${index + 1} Gender`}
                                        name={`childGender${index}`}
                                        options={['Male', 'Female']}
                                        selectedValue={child.gender}
                                        onChange={(gender) => {
                                            const updated = [...children];
                                            updated[index].gender = gender;
                                            setChildren(updated);
                                        }}
                                        required
                                    />
                                </div>

                                <button
                                    onClick={() => {
                                        const updated = [...children];
                                        updated.splice(index, 1);
                                        setChildren(updated);
                                    }}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: 'red',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                    title="Remove Child"
                                >
                                    <FiTrash size={18} />
                                    <span style={{ marginLeft: '4px', fontSize: '14px' }}>Remove</span>
                                </button>
                            </div>

                        </div>
                    ))}






                    <div className='section'>
                        <BrowseFileWidget label="Father Photo" required onFileChange={(file) => console.log(file)} />
                        <BrowseFileWidget label="Mother Photo" required onFileChange={(file) => console.log(file)} />
                        <BrowseFileWidget label="Wife Photo" required onFileChange={(file) => console.log(file)} />
                        {children.length > 0 && (
                            <div className="childPhotoSection">
                                {children.map((child, index) => (
                                    <BrowseFileWidget
                                        key={index}
                                        label={`Child ${index + 1} Photo`}
                                        required
                                        onFileChange={(file) => {
                                            const updated = [...children];
                                            updated[index].file = file;
                                            setChildren(updated);
                                        }}
                                    />
                                ))}
                            </div>
                        )}

                    </div>
                </>
            )}
        </div>
    );
};

export default FamilyDetails;
