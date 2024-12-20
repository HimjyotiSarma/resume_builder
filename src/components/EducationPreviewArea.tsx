import { EducationPreviewProp } from '../utils/types'
import '../styles/EducationPreviewArea.scss'

const EducationPreviewArea = ({
  degree,
  institute,
  date_of_passing,
  location,
}: EducationPreviewProp) => {
  return (
    <div className="educationPreviewArea">
      <div className="education_left_area">
        <div className="education_date">{date_of_passing}</div>
        <div className="education_location">{location}</div>
      </div>
      <div className="education_right_area">
        <h3>{institute}</h3>
        <div className="education_degree">{degree}</div>
      </div>
    </div>
  )
}
export default EducationPreviewArea
