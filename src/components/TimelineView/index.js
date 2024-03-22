// Write your code here
import {Chrono} from 'react-chrono'
import './index.css'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="timeline-container">
      <div className="responsive-container">
        <div className="header-container">
          <h1 className="heading">
            MY JOURNEY OF <br />
            <span className="span-text">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'PROJECT') {
              return (
                <ProjectTimelineCard
                  key={eachItem.id}
                  projectDetails={eachItem}
                />
              )
            }
            return (
              <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
