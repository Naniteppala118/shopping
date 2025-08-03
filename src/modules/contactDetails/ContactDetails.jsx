import React, { useState } from 'react';
import MainTextField from '../../reusableComponents/mainTextField/MainTextField';
import './ContactDetails.css'
const ContactDetails = () => {
    const [username, setUsername] = useState('');
    const [salutation, setSalutation] = useState('');
    const [gender, setGender] = useState('');
    const [qualification, setQualification] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [isSameAddress, setIsSameAddress] = useState(false);

    const handleSameAddressToggle = (e) => {
        const checked = e.target.checked;
        setIsSameAddress(checked);

        if (checked) {
            setCurrentAddress(permanentAddress); // copy all fields
        } else {
            setCurrentAddress({ // clear current address
                pinCode: '',
                flatNo: '',
                locality: '',
                landmark: '',
                country: '',
                state: ''
            });
        }
    };

    const [permanentAddress, setPermanentAddress] = useState({
        pinCode: '',
        flatNo: '',
        locality: '',
        district: '',
        country: '',
        state: ''
    });

    const [currentAddress, setCurrentAddress] = useState({
        pinCode: '',
        flatNo: '',
        locality: '',
        district: '',
        country: '',
        state: ''
    });

    const fetchAddressFromPincode = async (pincode) => {
        try {
            const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = await response.json();

            if (data[0].Status === "Success" && data[0].PostOffice && data[0].PostOffice.length > 0) {
                const info = data[0].PostOffice[0];
                return {
                    state: info.State,
                    district: info.District,
                    country: info.Country,
                };
            }
        } catch (error) {
            console.error("Failed to fetch address details", error);
        }
        return {
            state: '',
            district: '',
            country: ''
        };
    };




    return (
        <div className='mainSection'>
            <div className='subSection'>
                <MainTextField label='Personal Email' placeholder='Enter personal email' required style={{ width: '550px', }} />
                <MainTextField label='Mobile Number' placeholder='Enter mobile number' required style={{ width: '550px' }} />
                <div className='address'>
                    <h4 className='addressHeadline' >
                        Permanent Address
                    </h4>
                    <div className='addressSection'>
                        <MainTextField label='Pin Code' placeholder='Enter Pin Code' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={permanentAddress.pinCode}
                            onChange={async (e) => {
                                const pin = e.target.value;
                                setPermanentAddress({ ...permanentAddress, pinCode: pin });

                                if (pin.length === 6) {
                                    const { state, district, country } = await fetchAddressFromPincode(pin);
                                    setPermanentAddress(prev => ({
                                        ...prev,
                                        state: state,
                                        district: district,
                                        country: country
                                    }));
                                }
                            }

                            } />
                        <MainTextField label='Flat No / House No' placeholder='Enter flat no / house no' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={permanentAddress.flatNo}
                            onChange={(e) =>
                                setPermanentAddress({ ...permanentAddress, flatNo: e.target.value })
                            } />

                    </div>
                    <div className='addressSection'>
                        <MainTextField label='State Name/ Colony/ Locality' placeholder='Enter state/colony/locality' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={permanentAddress.locality}
                            onChange={(e) =>
                                setPermanentAddress({ ...permanentAddress, locality: e.target.value })
                            } />
                        <MainTextField label='District' placeholder='Enter landmark' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={permanentAddress.district}
                            onChange={(e) =>
                                setPermanentAddress({ ...permanentAddress, district: e.target.value })
                            } />

                    </div>
                    <div className='addressSection'>
                        <MainTextField label='Country Name' placeholder='Enter personal email' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={permanentAddress.country}
                            onChange={(e) =>
                                setPermanentAddress({ ...permanentAddress, country: e.target.value })
                            } />
                        <MainTextField label='State' placeholder='Enter state' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={permanentAddress.state}
                            onChange={(e) =>
                                setPermanentAddress({ ...permanentAddress, state: e.target.value })
                            } />

                    </div>



                </div>



            </div>
            <div className='subSection' >
                <MainTextField label='Work Email' placeholder='Enter work email' style={{ width: '550px' }} />
                <MainTextField label='Emergency Contact Number' placeholder='Enter emergency contact number' required style={{ width: '550px' }} />
                <div className='address'>
                    <h4>
                        Current Address
                    </h4>
                    <div className="sameAddressCheckbox">
                        <input
                            type="checkbox"
                            id="sameAddress"
                            checked={isSameAddress}
                            onChange={handleSameAddressToggle}
                        />
                        <label htmlFor="sameAddress">Same as Permanent Address</label>
                    </div>
                    <div className='addressSection'>
                        <MainTextField label='Pin Code' placeholder='Enter Pin Code' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={currentAddress.pinCode}
                             onChange={async (e) => {
                                const pin = e.target.value;
                                setCurrentAddress({ ...currentAddress, pinCode: pin });

                                if (pin.length === 6) {
                                    const { state, district, country } = await fetchAddressFromPincode(pin);
                                    setCurrentAddress(prev => ({
                                        ...prev,
                                        state: state,
                                        district: district,
                                        country: country
                                    }));
                                }
                            }} />
                        <MainTextField label='Flat No / House No' placeholder='Enter flat no / house no' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={currentAddress.flatNo}
                            onChange={(e) =>
                                setCurrentAddress({ ...currentAddress, flatNo: e.target.value })
                            } />

                    </div>
                    <div className='addressSection'>
                        <MainTextField label='State Name/ Colony/ Locality' placeholder='Enter state/colony/locality' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={currentAddress.locality}
                            onChange={(e) =>
                                setCurrentAddress({ ...currentAddress, locality: e.target.value })
                            } />
                        <MainTextField label='District' placeholder='Enter landmark' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={currentAddress.district}
                            onChange={(e) =>
                                setCurrentAddress({ ...currentAddress, district: e.target.value })
                            } />

                    </div>
                    <div className='addressSection'>
                        <MainTextField label='Country Name' placeholder='Enter personal email' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={currentAddress.country}
                            onChange={(e) =>
                                setCurrentAddress({ ...currentAddress, country: e.target.value })
                            } />
                        <MainTextField label='State' placeholder='Enter state' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={currentAddress.state}
                            onChange={(e) =>
                                setCurrentAddress({ ...currentAddress, state: e.target.value })
                            } />

                    </div>



                </div>
            </div>


        </div>
    );
}

export default ContactDetails;