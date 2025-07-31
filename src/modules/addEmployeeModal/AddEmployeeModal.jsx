import React, { useState } from 'react';
import './AddEmployeeModal.css';
import AddButtonWidget from '../../reusableComponents/addButtonWidget/AddButtonWidget';
import EmployeeDetailsModule from '../employeeDetails/EmployeeDetailsModule';
import ContactDetails from '../contactDetails/ContactDetails';
import CertificateUploads from '../certificateUploads/CertificateUploads';
import FamilyDetails from '../familyDetails/FamilyDetails';
import EmploymentDetails from '../employmentDetails/EmploymentDetails';

const steps = [
    '1. Employee Details',
    '2. Contact Details',
    '3. Certificate Uploads',
    '4. Family Details',
    '5. Employment Details',
];

const AddEmployeeModal = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState(0);

    if (!isOpen) return null;

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 0:
                return <div><EmployeeDetailsModule /></div>;
            case 1:
                return <div><ContactDetails /></div>;
            case 2:
                return <div><CertificateUploads /></div>;
            case 3:
                return <div><FamilyDetails /></div>;
            case 4:
                return <div><EmploymentDetails /></div>;
            default:
                return null;
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-close" onClick={onClose}>×</div>
                {/* Header Steps */}
                <div className="step-header">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div
                                className={`step-title ${index === currentStep ? 'active' : ''}`}
                            >
                                <span>{step}</span>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="step-connector"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Main Body */}
                <div className="modal-body">
                    {renderStepContent()}
                </div>

                {/* Footer Buttons */}
                <div className="modal-footer">


                    {currentStep !== 0 && (
                        <AddButtonWidget
                            onClick={prevStep}
                            text="Previous"
                            style={{ padding: '16px 24px', color: '#1D4C43', border: '1px solid', backgroundColor: '#ffffff' }}
                        />
                    )}
                    <AddButtonWidget
                        onClick={nextStep}
                        disabled={currentStep === steps.length - 1}
                        text={currentStep === 4 ? "Save & Download" : "Next"}
                        style={{ padding: '16px 24px' }}
                    />

                </div>
            </div>
        </div>
    );
};

export default AddEmployeeModal;
