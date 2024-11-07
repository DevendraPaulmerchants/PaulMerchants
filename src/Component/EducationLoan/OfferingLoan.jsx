import React from 'react';
import "./EducationLoan.css";

function OfferingLoan() {
    return (
        <div className='our-insurance-offerings-parent'>
            <h2>Our Education Loans Offerings</h2>
            <div className="provided-insurance">
                <div className="provided-insurance-card education-loan-card">
                    <h3>Student Loans</h3>
                    <p>Empower your dreams of higher education with our flexible student loan options. We cover tuition fees, living expenses, and more, so you can focus on your studies.</p>
                    <div className='insurance-btn-img-container education-loan-btn-img-container'>
                        <div className='insurance-card-btn'>
                            <button id='cards-button'>Get Loan</button>
                        </div>
                        <div className='insurance-card-img education-loan-card-img'>
                            <img src='StudentLoan.svg' alt='Student Loan' />
                        </div>
                    </div>
                </div>
                <div className="provided-insurance-card health education-loan-card">
                    <h3>Career Development Loans</h3>
                    <p>Enhance your skills and career prospects with our career development loans. Invest in courses, training, and certifications that propel your career forward.</p>
                    <div className='insurance-btn-img-container education-loan-btn-img-container'>
                        <div className='insurance-card-btn'>
                            <button id='cards-button'>Get Loan</button>
                        </div>
                        <div className='insurance-card-img'>
                            <img src='CareerDevelopmentLoan.svg' alt='Career Development Loan' />
                        </div>
                    </div>
                </div>
                <div className="provided-insurance-card travel education-loan-card">
                    <h3>Education Abroad Loans</h3>
                    <p>Make global education with our education abroad loans. We provide financial support for studying abroad, ensuring your international aspirations become a reality.</p>
                    <div className='insurance-btn-img-container education-loan-btn-img-container'>
                        <div className='insurance-card-btn'>
                            <button id='cards-button'>Get Loan</button>
                        </div>
                        <div className='insurance-card-img'>
                            <img src='EducationLoans.svg' alt='Education Loan' />
                        </div>
                    </div>
                </div>
                <div className="provided-insurance-card property education-loan-card">
                    <h3>Skill Enhancement Loans</h3>
                    <p>Stay competitive in the job market by upgrading your skills with our skill enhancement loans. We finance courses that equip you with the latest expertise.</p>
                    <div className='insurance-btn-img-container education-loan-btn-img-container'>
                        <div className='insurance-card-btn'>
                            <button id='cards-button'>Get Loan</button>
                        </div>
                        <div className='insurance-card-img'>
                            <img src='SkillEnhancement.svg' alt='Skill Enhancement' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferingLoan