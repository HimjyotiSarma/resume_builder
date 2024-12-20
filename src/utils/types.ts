interface PersonalDetail {
  fullName: string
  email: string
  phone: string
  address: string
}

interface EducationBackground {
  id: string
  degree: string
  institute: string
  date_of_passing: string
  location: string
}

interface EducationPreviewProp {
  degree: string
  institute: string
  date_of_passing: string
  location: string
}
// interface EducationBackgroundList {
//   education: EducationBackground[]
// }

// interface ExperienceBackgroundList {
//   experience: ExperienceBackground[]
// }

interface ExperienceBackground {
  id: string
  job_title: string
  company: string
  startDate: string
  endDate: string
  location: string
  description: string
}

interface ExperiencePreviewProp {
  job_title: string
  company: string
  startDate: string
  endDate: string
  location: string
  description: string
}

interface ApplicantDetailsProps {
  personalDetails: PersonalDetail
  updatePersonalDetails: (detail: PersonalDetail) => void
  educationDetails: EducationBackground[]
  updateEducationDetails: (detail: EducationBackground[]) => void
  experienceDetails: ExperienceBackground[]
  updateExperienceDetails: (detail: ExperienceBackground[]) => void
}

interface EducationDetailProp {
  educationDetail: EducationBackground
  updateEducationDetail: (detail: EducationBackground) => void
}

interface PersonalDetailProps {
  personalDetails: PersonalDetail
  updatePersonalDetails: (detail: PersonalDetail) => void
}

interface ExperienceBackgroundProp {
  experienceDetail: ExperienceBackground
  updateExperienceDetail: (detail: ExperienceBackground) => void
}

interface ResumePreviewerProps {
  personalDetails: PersonalDetail
  educationDetails: EducationBackground[]
  experienceDetails: ExperienceBackground[]
}

interface ResumeTitleProp {
  title: string
}

export {
  type PersonalDetail,
  type EducationBackground,
  type ExperienceBackground,
  type ApplicantDetailsProps,
  type PersonalDetailProps,
  type EducationDetailProp,
  type ExperienceBackgroundProp,
  type ResumePreviewerProps,
  type EducationPreviewProp,
  type ResumeTitleProp,
  type ExperiencePreviewProp,
}
