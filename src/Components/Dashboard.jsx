import React from 'react'
import AssignmentTracker from './AssignmentTracker'
import PriorityAssignment from './PriorityAssignment'
import YoutubeSection from './YoutubeSection'

function Dashboard() {
  return (
    <div className="Dashboard">
        <div className="header">
            <img src="Logo/logo.png" alt="TAKA Logo" />
        </div>
        <div className="content">
            <div className="left-column">
                <PriorityAssignment />
                <div className="bottom-row">
                    <YoutubeSection />
                </div>
            </div>
            <div className="right-column">
                <div className="right-column-1">
                    <p className='getting-started'>Getting Started</p>
                </div>
                <AssignmentTracker />
            </div>
        </div>
    </div>
  )
}

export default Dashboard