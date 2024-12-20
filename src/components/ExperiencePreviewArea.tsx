import { ExperiencePreviewProp } from '../utils/types'
import '../styles/ExperiencePreviewArea.scss'

const ExperiencePreviewArea = ({
  job_title,
  company,
  startDate,
  endDate,
  location,
  description,
}: ExperiencePreviewProp) => {
  return (
    <div className="experiencePreviewArea">
      <div className="experience_left_area">
        <div className="experience_date_area">
          {startDate && endDate && `${startDate} to ${endDate}`}
        </div>
        <div className="experience_location">{location}</div>
      </div>
      <div className="experience_right_area">
        <h3>{company}</h3>
        <div className="company_role">{job_title}</div>
        <div className="company_work_description">{description}</div>
      </div>
    </div>
  )
}
export default ExperiencePreviewArea
