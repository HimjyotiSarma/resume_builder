import { useState } from 'react'
import './App.css'
import ApplicantDetails from './components/ApplicantDetails'
import ResumePreviewer from './components/ResumePreviewer'
import ExampleDetail from './utils/ExampleDetails'
import {
  PersonalDetail,
  EducationBackground,
  ExperienceBackground,
} from './utils/types'

function App() {
  const [personalDetail, setPersonalDetail] = useState<PersonalDetail>(
    ExampleDetail.personal_detail[0]
  )
  const [education, setEducation] = useState<EducationBackground[]>(
    ExampleDetail.education
  )
  const [experiences, setExperiences] = useState<ExperienceBackground[]>(
    ExampleDetail.experience
  )
  return (
    <main>
      <ApplicantDetails
        personalDetails={personalDetail}
        updatePersonalDetails={(detail: PersonalDetail) =>
          setPersonalDetail(detail)
        }
        educationDetails={education}
        updateEducationDetails={(detail: EducationBackground[]) =>
          setEducation(detail)
        }
        experienceDetails={experiences}
        updateExperienceDetails={(detail: ExperienceBackground[]) =>
          setExperiences(detail)
        }
      />
      <ResumePreviewer
        personalDetails={personalDetail}
        educationDetails={education}
        experienceDetails={experiences}
      />
    </main>
  )
}

export default App
