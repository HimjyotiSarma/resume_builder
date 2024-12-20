import '../styles/ResumePreviewer.scss'
import { IoMdMail } from 'react-icons/io'
import { FaPhoneVolume } from 'react-icons/fa6'
import {
  EducationBackground,
  ExperienceBackground,
  ResumePreviewerProps,
} from '../utils/types'
import { ImAddressBook } from 'react-icons/im'
import EducationPreviewArea from './EducationPreviewArea'
import ResumeTitle from './ResumeTitle'
import ExperiencePreviewArea from './ExperiencePreviewArea'

const ResumePreviewer = ({
  personalDetails,
  educationDetails,
  experienceDetails,
}: ResumePreviewerProps) => {
  return (
    <div className="resumePreviewBox">
      <div className="resume_container">
        <div className="personal_details_area">
          <div className="name_area">
            {personalDetails.fullName || 'Untitled'}
          </div>
          <div className="socials">
            <div className="email">
              <IoMdMail /> {personalDetails.email || 'Undefined'}
            </div>
            <div className="phone">
              <FaPhoneVolume /> {personalDetails.phone || 'Undefined'}
            </div>
            <div className="address">
              <ImAddressBook /> {personalDetails.address || 'Undefined'}
            </div>
          </div>
        </div>
        <div className="resume_details">
          <div className="education">
            <ResumeTitle title="education" />
            {educationDetails.length > 0 &&
              educationDetails.map((educationDetail: EducationBackground) => {
                return (
                  <EducationPreviewArea
                    degree={educationDetail.degree}
                    institute={educationDetail.institute}
                    date_of_passing={educationDetail.date_of_passing}
                    location={educationDetail.location}
                    key={educationDetail.id}
                  />
                )
              })}
          </div>
          <div className="experiences">
            <ResumeTitle title="experiences" />
            {experienceDetails.length > 0 &&
              experienceDetails.map(
                (experienceDetail: ExperienceBackground) => {
                  return (
                    <ExperiencePreviewArea
                      job_title={experienceDetail.job_title}
                      company={experienceDetail.company}
                      startDate={experienceDetail.startDate}
                      endDate={experienceDetail.endDate}
                      location={experienceDetail.location}
                      description={experienceDetail.description}
                      key={experienceDetail.id}
                    />
                  )
                }
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResumePreviewer
