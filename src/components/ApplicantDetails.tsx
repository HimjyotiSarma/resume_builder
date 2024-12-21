import { v4 as uuidv4 } from 'uuid'
import '../styles/ApplicantDetail.scss'
import { RiDeleteBin5Fill } from 'react-icons/ri'
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

  function addNewEducation() {
    const newEduccation: EducationBackground = {
      id: uuidv4(),
      degree: '',
      institute: '',
      date_of_passing: '',
      location: '',
    }
    updateEducationDetails([...educationDetails, newEduccation])
  }

  const addNewExperience = () => {
    const newExperiece: ExperienceBackground = {
      id: uuidv4(),
      job_title: '',
      company: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    }
    updateExperienceDetails([...experienceDetails, newExperiece])
  }

  function deleteEducation(id: string) {
    const newEducationList: EducationBackground[] = educationDetails.filter(
      (educationDetail: EducationBackground) => educationDetail.id != id
    )
    updateEducationDetails(newEducationList)
  }

  function deleteExperience(id: string) {
    const newExperienceList: ExperienceBackground[] = experienceDetails.filter(
      (experience: ExperienceBackground) => experience.id != id
    )
    updateExperienceDetails(newExperienceList)
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
                <div className="detail_head">
                  <h3>Education-{index + 1}</h3>
                  <button onClick={() => deleteEducation(educationDetail.id)}>
                    <RiDeleteBin5Fill />
                  </button>
                </div>
                <EducationDetailComponent
                  educationDetail={educationDetail}
                  updateEducationDetail={handleEducationInput}
                />
              </div>
            )
          )}
          <button className="add_new_section" onClick={addNewEducation}>
            +
          </button>
        </div>
      </div>
      <div className="info_box">
        <h1>Experience</h1>
        <div className="experience_details">
          {experienceDetails.map(
            (experienceDetail: ExperienceBackground, index: number) => (
              <div key={experienceDetail.id}>
                <div className="detail_head">
                  <h3>Experience-{index + 1}</h3>
                  <button onClick={() => deleteExperience(experienceDetail.id)}>
                    <RiDeleteBin5Fill />
                  </button>
                </div>

                <ExperienceBackgroundComponent
                  experienceDetail={experienceDetail}
                  updateExperienceDetail={handleExperienceInput}
                />
              </div>
            )
          )}
          <button className="add_new_section" onClick={addNewExperience}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}
export default ApplicantDetails
