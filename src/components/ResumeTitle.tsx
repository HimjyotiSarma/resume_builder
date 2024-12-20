import { ResumeTitleProp } from '../utils/types'

const ResumeTitle = ({ title }: ResumeTitleProp) => {
  const formattedTitle = title
    ? title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()
    : 'Untitled'
  return (
    <div className="resume_title_box">
      <h1>{formattedTitle}</h1>
    </div>
  )
}
export default ResumeTitle
