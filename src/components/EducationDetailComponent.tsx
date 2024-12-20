import { EducationBackground, EducationDetailProp } from '../utils/types'

const EducationDetailComponent = ({
  educationDetail,
  updateEducationDetail,
}: EducationDetailProp) => {
  const handleEducationInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof EducationBackground
  ) => {
    // const EducationData = [...allEducationDetails]
    // const value =
    //   fieldName == 'year_of_passing' ? Number(e.target.value) : e.target.value

    const updateDetail = { ...educationDetail, [fieldName]: e.target.value }
    updateEducationDetail(updateDetail)
  }
  return (
    <div className="education_area detailArea">
      <div className="form_box">
        <label htmlFor={`school_name_${educationDetail.id}`}>School</label>
        <input
          type="text"
          name={`school_name_${educationDetail.id}`}
          id={`school_name_${educationDetail.id}`}
          required
          value={educationDetail.institute}
          onChange={(e) => handleEducationInput(e, 'institute')}
        />
      </div>
      <div className="form_box">
        <label htmlFor={`school_degree_${educationDetail.id}`}>Degree</label>
        <input
          type="text"
          name={`school_degree_${educationDetail.id}`}
          id={`school_degree_${educationDetail.id}`}
          required
          value={educationDetail.degree}
          onChange={(e) => handleEducationInput(e, 'degree')}
        />
      </div>
      <div className="form_box">
        <label htmlFor={`pass_year_${educationDetail.id}`}>
          Date of Passing
        </label>
        <input
          type="string"
          name={`pass_year_${educationDetail.id}`}
          id={`pass_year_${educationDetail.id}`}
          required
          value={educationDetail.date_of_passing}
          onChange={(e) => handleEducationInput(e, 'date_of_passing')}
        />
      </div>
      <div className="form_box">
        <label htmlFor={`location_${educationDetail.id}`}>Address</label>
        <input
          type="string"
          name={`location_${educationDetail.id}`}
          id={`location_${educationDetail.id}`}
          required
          value={educationDetail.location}
          onChange={(e) => handleEducationInput(e, 'location')}
        />
      </div>
    </div>
  )
}
export default EducationDetailComponent
