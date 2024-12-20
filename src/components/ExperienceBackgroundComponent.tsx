import React from 'react'
import { ExperienceBackground, ExperienceBackgroundProp } from '../utils/types'

const ExperienceBackgroundComponent = ({
  experienceDetail,
  updateExperienceDetail,
}: ExperienceBackgroundProp) => {
  const handleExperienceInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldname: keyof ExperienceBackground
  ) => {
    e.preventDefault()
    const value = e.target.value
    const newExperienceData = { ...experienceDetail, [fieldname]: value }
    updateExperienceDetail(newExperienceData)
  }
  return (
    <div className="experience_area detailArea">
      <div className="form_box">
        <label htmlFor={`company_name_${experienceDetail.id}`}>
          Company Name
        </label>
        <input
          type="text"
          name={`company_name_${experienceDetail.id}`}
          id={`company_name_${experienceDetail.id}`}
          value={experienceDetail.company}
          onChange={(e) => handleExperienceInput(e, 'company')}
        />
      </div>
      <div className="form_box">
        <label htmlFor={`position_title_${experienceDetail.id}`}>
          Position Title
        </label>
        <input
          type="text"
          name={`position_title_${experienceDetail.id}`}
          id={`position_title_${experienceDetail.id}`}
          value={experienceDetail.job_title}
          onChange={(e) => handleExperienceInput(e, 'job_title')}
        />
      </div>
      <div className="form_box">
        <div className="inner_form_box">
          <label htmlFor={`position_start_date_${experienceDetail.id}`}>
            Start Date
          </label>
          <input
            type="text"
            name={`position_start_date_${experienceDetail.id}`}
            id={`position_start_date_${experienceDetail.id}`}
            value={experienceDetail.startDate}
            onChange={(e) => handleExperienceInput(e, 'startDate')}
          />
        </div>
        <div className="inner_form_box">
          <label htmlFor={`position_end_date_${experienceDetail.id}`}>
            End Date
          </label>
          <input
            type="text"
            name={`position_end_date_${experienceDetail.id}`}
            id={`position_end_date_${experienceDetail.id}`}
            value={experienceDetail.endDate}
            onChange={(e) => handleExperienceInput(e, 'endDate')}
          />
        </div>
      </div>
      <div className="form_box">
        <label htmlFor={`position_location_${experienceDetail.id}`}>
          Location
        </label>
        <input
          type="text"
          name={`position_location_${experienceDetail.id}`}
          id={`position_location_${experienceDetail.id}`}
          value={experienceDetail.location}
          onChange={(e) => handleExperienceInput(e, 'location')}
        />
      </div>
      <div className="form_box">
        <label htmlFor={`position_description_${experienceDetail.id}`}>
          Description
        </label>
        <input
          type="text"
          name={`position_description_${experienceDetail.id}`}
          id={`position_description_${experienceDetail.id}`}
          value={experienceDetail.description}
          onChange={(e) => handleExperienceInput(e, 'description')}
        />
      </div>
    </div>
  )
}
export default ExperienceBackgroundComponent
