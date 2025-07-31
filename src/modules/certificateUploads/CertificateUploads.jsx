import BrowseFileWidget from "../../reusableComponents/browseFileWidget/BrowseFileWidget";
import './CertificateUploads.css'
const CertificateUploads = () => {
    return (
        <div className="certificateSection">
            <div className="section">
                <BrowseFileWidget label="Aadhar Upload Front" onFileChange={(file) => console.log(file)} required />
                <BrowseFileWidget label="Aadhar Upload Back" onFileChange={(file) => console.log(file)} required />
                <BrowseFileWidget label="Pan Card" onFileChange={(file) => console.log(file)} required />

            </div>
            <div className="section">
                <BrowseFileWidget label="SSC Certificate" onFileChange={(file) => console.log(file)} />
                <BrowseFileWidget label="Intermediate or Diploma Certificate" onFileChange={(file) => console.log(file)} />
                <BrowseFileWidget label="Degree Certificate" onFileChange={(file) => console.log(file)} />

            </div>
            <div className="bottomSection">
                <BrowseFileWidget label="PG Certificate" onFileChange={(file) => console.log(file)} />
                <BrowseFileWidget label="PhD Certificate" onFileChange={(file) => console.log(file)} />

            </div>
        </div>



    );
}

export default CertificateUploads;