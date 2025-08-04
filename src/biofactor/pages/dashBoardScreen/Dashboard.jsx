import React, { useState } from 'react';
import MainTextField from "../../../reusableComponents/mainTextField/MainTextField";

export default function DashboardScreen() {
  const [permanentAddress, setPermanentAddress] = useState({
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
    <div>
      {/*<h2>📊 Welcome to the Dashboard!</h2>
      <p>This is your dashboard screen content.</p>*/}
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
      <MainTextField label='Country Name' placeholder='Enter personal email' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={permanentAddress.country}
        onChange={(e) =>
          setPermanentAddress({ ...permanentAddress, country: e.target.value })
        } />
      <MainTextField label='State' placeholder='Enter state' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={permanentAddress.state}
        onChange={(e) =>
          setPermanentAddress({ ...permanentAddress, state: e.target.value })
        } />
        <MainTextField label='District' placeholder='Enter state' required style={{ width: '260px', fontSize: '14px', }} labelFontSize='14px' value={permanentAddress.district}
        onChange={(e) =>
          setPermanentAddress({ ...permanentAddress, district: e.target.value })
        } />

    </div>
  );
}
