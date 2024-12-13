import '../styles/ApplicantDetail.scss'
import { ApplicantDetailsProps, PersonalDetail } from '../utils/types'

const ApplicantDetails = ({
  personalDetails,
  updatePersonalDetails,
}: ApplicantDetailsProps) => {
  function handleFieldInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof PersonalDetail
  ) {
    e.preventDefault()
    const newPersonalDetail: PersonalDetail = {
      ...personalDetails,
      [fieldName]: e.target.value,
    }
    updatePersonalDetails(newPersonalDetail)
  }

  return (
    <div className="applicant_detail">
      <div className="personal_detail_form detailArea">
        <div className="form_box">
          <label htmlFor="applicant_name">Name</label>
          <input
            type="text"
            name="applicant_name"
            id="applicant_name"
            value={personalDetails.fullName}
            onChange={(e) => handleFieldInputChange(e, 'fullName')}
          />
        </div>
        <div className="form_box">
          <label htmlFor="applicant_email">Email ID</label>
          <input
            type="text"
            name="applicant_email"
            id="applicant_email"
            value={personalDetails.email}
            onChange={(e) => handleFieldInputChange(e, 'email')}
          />
        </div>
        <div className="form_box">
          <label htmlFor="applicant_Phone">Phone</label>
          <input
            type="text"
            name="applicant_Phone"
            id="applicant_Phone"
            value={personalDetails.phone}
            onChange={(e) => handleFieldInputChange(e, 'phone')}
          />
        </div>
        <div className="form_box">
          <label htmlFor="applicant_Address">Phone</label>
          <input
            type="text"
            name="applicant_Address"
            id="applicant_Address"
            value={personalDetails.address}
            onChange={(e) => handleFieldInputChange(e, 'address')}
          />
        </div>
      </div>
    </div>
  )
}
export default ApplicantDetails
