import React from 'react';
import "./ManagementTeam.css";

function ManagementTeam() {
    return <>
        <div className="management-team-hero-section">
            <h2>Meet Our Management Team</h2>
            <p>Welcome to Paul Merchants, where we take pride in our dedicated and visionary management team. Our team is committed to delivering excellence and driving our company forward. Get to know the individuals who lead us towards success:</p>
        </div>
        <div className="management-team-leader-parent">
            <div className="management-team-leader">
                <div className="management-team-img">
                    <img src='ManagementTeamPaulSir.svg' alt='Mr. S Paul'/>
                </div>
                <h3>Mr. S Paul</h3>
                <p>Chairman</p>
            </div>
            <div className="management-team-leader">
                <div className="management-team-img">
                    <img src='ManagementTeamRajneeshSir.svg' alt='Mr. Rajneesh Bansal'/>
                </div>
                <h3>Mr. Rajneesh Bansal</h3>
                <p>MD</p>
            </div>
            <div className="management-team-leader">
                <div className="management-team-img">
                    <img src='ManagementTeamSaritaMadam.svg' alt='SMT Sarita Rani Bansal'/>
                </div>
                <h3>SMT Sarita Rani Bansal</h3>
                <p>Whole Time Director</p>
            </div>
            <div className="management-team-leader">
                <div className="management-team-img">
                    <img src='ManagementTeamRiteshSir.svg' alt='Mr. S Paul'/>
                </div>
                <h3>Mr. Ritesh Vaid</h3>
                <p>Whole Time Director</p>
            </div>
            <div className="management-team-leader">
                <div className="management-team-img">
                    <img src='ManagementTeamSaibu.svg' alt='Mr. Shaibu Cherian'/>
                </div>
                <h3>Mr. Shaibu Cherian</h3>
                <p>Whole Time Director</p>
            </div>
        </div>
    </>
}

export default ManagementTeam