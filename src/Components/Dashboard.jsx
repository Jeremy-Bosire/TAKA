import React from 'react'

function Dashboard() {
  return (
    <div className="Dashboard">
        <div className="header">
            <img src="Logo/logo.png" alt="TAKA Logo" />
        </div>
        <div className="content">
            <div className="left-column">
                <div className="top-row">
                    <div className="top-row-1">
                        <p>TOP PRIORITY: MAIN ASSIGNMENT</p>
                        <p>Edit</p>
                    </div>
                    <div className="top-row-2">
                        <div className="top-row-2-1">
                            <h1>Progress:</h1>
                            <p>Not Set:</p>
                        </div>
                        <div className="top-row-2-2">
                            <h1>Deadline:</h1>
                            <p>Not Set:</p>
                        </div>
                    </div>
                </div>
                <div className="bottom-row">
                    <div className="Youtube-video">
                        
                    </div>
                    <div className="Youtube-video-description">
                        <p>Learn the importance of Taka</p>
                        <p>Watch this overview video about the importance of using TAKA to track your assignments efficiently</p>
                        <button>Mark as done</button>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <div className="right-column-1">
                    <p>Getting Started</p>
                </div>
                <div className="right-column-2">
                    <p>Add Assignment</p>
                    <p>Manually add your assignments by filling a form</p>
                    <button>Add Manually</button>
                </div>
                <div className="right-column-3"></div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard