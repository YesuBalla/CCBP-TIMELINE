// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="course-title-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-tags-list">
        {tagsList.map(eachTag => (
          <li key={eachTag.id}>
            <p className="tag-item">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
