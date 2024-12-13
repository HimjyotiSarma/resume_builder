import { useState } from 'react'
import './App.css'
import ApplicantDetails from './components/ApplicantDetails'
import ResumePreviewer from './components/ResumePreviewer'
import ExampleDetail from './utils/ExampleDetails'
import { PersonalDetail, ExperienceBackgroundList } from './utils/types'

function App() {
  const [personalDetail, setPersonalDetail] = useState<PersonalDetail>(
    ExampleDetail.personal_detail[0]
  )
  return (
    <main>
      <ApplicantDetails
        personalDetails={personalDetail}
        updatePersonalDetails={(detail: PersonalDetail) =>
          setPersonalDetail(detail)
        }
      />
      <ResumePreviewer />
    </main>
  )
}

export default App
