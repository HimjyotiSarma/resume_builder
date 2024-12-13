interface PersonalDetail {
  fullName: string
  email: string
  phone: string
  address: string
}

interface EducationBackground {
  degree: string
  institute: string
  year_of_passing: number
}

interface ExperienceBackgroundList {
  experience: ExperienceBackground[]
}

interface ExperienceBackground {
  job_title: string
  company: string
  startDate: string
  endDate: string
  location: string
}

interface ApplicantDetailsProps {
  personalDetails: PersonalDetail
  updatePersonalDetails: (detail: PersonalDetail) => void
}

export {
  type PersonalDetail,
  type EducationBackground,
  type ExperienceBackground,
  type ExperienceBackgroundList,
  type ApplicantDetailsProps,
}
