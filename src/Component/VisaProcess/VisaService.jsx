import React from 'react';
import './VisaProcess.css';

function VisaService() {
  return (
    <div className='visa-services-include-container'>
        <h2>Our Visa Services Include</h2>
        <div className="visa-services-include-parent">
            <div className="visa-services-child">
                 <h3>Tourist Visas</h3>
                 <button>Apply Now</button>
            </div>
            <div className="visa-services-child">
                 <h3>Business Visas</h3>
                 <button>Apply Now</button>
            </div>
            <div className="visa-services-child">
                 <h3>Immigrant Visas</h3>
                 <button>Apply Now</button>
            </div>
            <div className="visa-services-child">
                 <h3>Visa Consultation</h3>
                 <button>Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default VisaService