import '../styles/ApplicantDetail.scss'
import {
  ApplicantDetailsProps,
  EducationBackground,
  ExperienceBackground,
} from '../utils/types'
import EducationDetailComponent from './EducationDetailComponent'
import ExperienceBackgroundComponent from './ExperienceBackgroundComponent'
import PersonalDetailComponent from './PersonalDetailComponent'

const ApplicantDetails = ({
  personalDetails,
  updatePersonalDetails,
  educationDetails,
  updateEducationDetails,
  experienceDetails,
  updateExperienceDetails,
}: ApplicantDetailsProps) => {
  const handleEducationInput = (updateEducation: EducationBackground) => {
    const updateEducationData: EducationBackground[] = educationDetails.map(
      (educationData) => {
        return updateEducation.id == educationData.id
          ? updateEducation
          : educationData
      }
    )
    updateEducationDetails(updateEducationData)
  }

  const addNewEducation = () => {
    console.log('Add New Education')
  }

  const addNewExperience = () => {
    console.log('Add New Experience')
  }

  const handleExperienceInput = (updateExperience: ExperienceBackground) => {
    const updateExperienceData: ExperienceBackground[] = experienceDetails.map(
      (experienceData) => {
        return updateExperience.id == experienceData.id
          ? updateExperience
          : experienceData
      }
    )
    updateExperienceDetails(updateExperienceData)
  }
  return (
    <div className="applicant_detail">
      <div className="info_box">
        <h1>Personal Details</h1>
        <div className="general_details">
          <PersonalDetailComponent
            personalDetails={personalDetails}
            updatePersonalDetails={updatePersonalDetails}
          />
        </div>
      </div>

      <div className="info_box">
        <h1>Education</h1>
        <div className="education_details">
          {educationDetails.map(
            (educationDetail: EducationBackground, index: number) => (
              <div key={educationDetail.id}>
                <h3>Education-{index + 1}</h3>
                <EducationDetailComponent
                  educationDetail={educationDetail}
                  updateEducationDetail={handleEducationInput}
                />
              </div>
            )
          )}
          <button onClick={addNewEducation}>+</button>
        </div>
      </div>
      <div className="info_box">
        <h1>Experience</h1>
        <div className="experience_details">
          {experienceDetails.map(
            (experienceDetail: ExperienceBackground, index: number) => (
              <div key={experienceDetail.id}>
                <h3>Experience-{index + 1}</h3>
                <ExperienceBackgroundComponent
                  experienceDetail={experienceDetail}
                  updateExperienceDetail={handleExperienceInput}
                />
              </div>
            )
          )}
          <button onClick={addNewExperience}>+</button>
        </div>
      </div>
    </div>
  )
}
export default ApplicantDetails
