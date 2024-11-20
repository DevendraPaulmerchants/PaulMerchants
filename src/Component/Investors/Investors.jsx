import React, { useState } from 'react';
import "./Investors.css";

function Investors() {
    // const [hideORShowAnswer, setHideORShowAnswer] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState(0);
    const handleShowAnswer = (index) => {
        setSelectedTitle(index);
        if (index === selectedTitle) {
            setSelectedTitle(0)
        }
    }
    return <>
        <div className="csr-hero-section investors-hero-section">
            <div className='csr-hero-left-section-50'>
                <h2 className='hero_section_title_h2'>Gallery</h2>
                <p className='hero_section_description_p'>Step into a world where visuals speak louder than words. Our Gallery is a testament to our journey, our values, and our commitment to excellence. Here, we showcase the moments, the milestones, and the memories that define our story. Explore our visual tapestry and discover the heart and soul of Paul Merchants.</p>
            </div>
        </div>
        <div className="investors-below-hero-sections">
            {/* ------------------------ Dawai ----------------------------------------------- */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>DAWAI</h2>
                    <h2 className='title-arrow'
                        onClick={() => handleShowAnswer(1)}>{selectedTitle === 1 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 1 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            <h4>AGM 2014</h4>
                            <p><a href='chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.paulmerchants.net/paulmerchants/wp-content/uploads/2015/12/scrutinizer-report.pdf' target='blank'>Scrutinizer Report</a></p>
                        </div>
                        <div id='dotted-border'></div>
                        <div className="investors-description-details">
                            <h4>AGM 2015</h4>
                            <p>Declaration of Results</p>
                            <p>Outcome of 31st AGM under Clause 35-A</p>
                            <p>Scrutinizer Report</p>
                        </div>
                    </div>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            <h4>AGM 2016</h4>
                            <p>AGM 2016 Voting Results Under Regulation 44(3) of lodr</p>
                            <p>Consolidated Scrutinizer Report</p>
                        </div>
                        <div id='dotted-border'></div>
                        <div className="investors-description-details">
                            <h4>AGM 2017</h4>
                            <p>AGM 2017 Voting Results Under Regulation 44(3) of lodr</p>
                        </div>
                    </div>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            <h4>AGM 2018</h4>
                            <p>Annual Return 2017-18</p>
                            <p>Audited Financial Statements of Subsidiaries</p>
                            <p>Voting Results Under Regulation 44(3) of SEBI (LODR) Regulations, 2015</p>
                        </div>
                        <div id='dotted-border'></div>
                        <div className="investors-description-details">
                            <h4>AGM 2019</h4>
                            <p>Annual Return</p>
                            <p>Voting Results Under Regulation 44(3) of SEBI (LODR) Regulations, 2015</p>
                            <br /><br />
                            <h4>Audited Financial Statements of Subsidiaries</h4>
                            <p>Paul Merchants Finance Private Limited</p>
                            <p>PML Realtors Pvt Ltd</p>
                        </div>
                    </div>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            <h4>AGM 2020</h4>
                            <p>Annual Return 2019-20</p>
                            <p>Intimation of Annual General Meeting, E-Voting And Book</p>
                            <p>Closure For The Financial Year 2019-2020</p>
                            <p>Voting Results Under Regulation 44(3) of SEBI (LODR) Regulations, 2015</p>
                            <p>Transcript of AGM</p>
                        </div>
                        <div id='dotted-border'></div>
                        <div className="investors-description-details">
                            <h4>AGM 2021</h4>
                            <p>Annual Return</p>
                            <p>Audited Financial Statements of Subsidiaries</p>
                            <p>Intimation of AGM, E-voting and Book Closure for Financial Year 2020-21</p>
                            <p>Voting Results Under Regulation 44(3) of SEBI (LODR) Regulations, 2015</p>
                            <p>Proceedings of 37th AGM</p>
                            <p>Transcript of AGM</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------- Postal Ballot --------------------------------------- */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>POSTAL BALLOT</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(2)}>{selectedTitle === 2 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 2 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            <h4>Postal Ballot 2022</h4>
                            <p>Postal Ballot Notice</p>
                            <p>Publication of Notice of Postal Ballot</p>
                            <p>Proceeding/Result of Postal Ballot</p>
                            <p>Voting Result under Reg 44(3)</p>
                            <p>Scrutinizer’s Report</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------------------- CORPORATE GOVERNANCE ------------------------------------- */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>CORPORATE GOVERNANCE</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(3)}>{selectedTitle === 3 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 3 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            <table>
                                <thead>
                                    <tr>
                                        <th><h4>Year 2012</h4></th>
                                        <th><h4>Year 2013</h4></th>
                                        <th><h4>Year 2014</h4></th>
                                        <th><h4>Year 2015</h4></th>
                                        <th><h4>Year 2016</h4></th>
                                        <th><h4>Year 2017</h4></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p>Qtr March 12</p></td>
                                        <td><p>Qtr March 13</p></td>
                                        <td><p>Qtr March 14</p></td>
                                        <td><p>Qtr March 15</p></td>
                                        <td><p>Qtr March 16</p></td>
                                        <td><p>Qtr March 17</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Qtr June 12</p></td>
                                        <td><p>Qtr June 13</p></td>
                                        <td><p>Qtr June 14</p></td>
                                        <td><p>Qtr June 15</p></td>
                                        <td><p>Qtr June 16</p></td>
                                        <td><p>Qtr June 17</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Qtr Sept 12</p></td>
                                        <td><p>Qtr Sept 13</p></td>
                                        <td><p>Qtr Sept 14</p></td>
                                        <td><p>Qtr Sept 15</p></td>
                                        <td><p>Qtr Sept 16</p></td>
                                        <td><p>Qtr Sept 17</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Qtr Dec 12</p></td>
                                        <td><p>Qtr Dec 13</p></td>
                                        <td><p>Qtr Dec 14</p></td>
                                        <td><p>Qtr Dec 15</p></td>
                                        <td><p>Qtr Dec 16</p></td>
                                        <td><p>Qtr Dec 17</p></td>
                                    </tr>
                                </tbody>
                            </table>
                            <br/>
                            <table style={{width:'85%'}}>
                                <thead>
                                    <tr>
                                        <th><h4>Year 2018</h4></th>
                                        <th><h4>Year 2019</h4></th>
                                        <th><h4>Year 2020</h4></th>
                                        <th><h4>Year 2021</h4></th>
                                        <th><h4>Year 2022</h4></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p>Qtr March 18</p></td>
                                        <td><p>Qtr March 19</p></td>
                                        <td><p>Qtr March 20</p></td>
                                        <td><p>Qtr March 21</p></td>
                                        <td><p>Qtr March 22</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Qtr June 18</p></td>
                                        <td><p>Qtr June 19</p></td>
                                        <td><p>Qtr June 20</p></td>
                                        <td><p>Qtr June 21</p></td>
                                        <td><p>Qtr June 22</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Qtr Sep 18</p></td>
                                        <td><p>Qtr Sep 19</p></td>
                                        <td><p>Qtr Sep 20</p></td>
                                        <td><p>Qtr Sep 21</p></td>
                                        <td><p>Qtr Sep 22</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Qtr Dec 18</p></td>
                                        <td><p>Qtr Dec 19</p></td>
                                        <td><p>Qtr Dec 20</p></td>
                                        <td><p>Qtr Dec 21</p></td>
                                        <td><p>Qtr Dec 22</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------- CSR ------------------------------------------------------- */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>CSR</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(4)}>{selectedTitle === 4 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 4 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            <h4>CSR</h4>
                            <p>CSR Policy</p>
                            <p>CSR Committee</p>
                            <p>Annual Report on CSR for FY 2014-15</p>
                            <p>Annual Report on CSR for FY 2015-16</p>
                            <p>CSR Projects Approved by Board for FY 2021-22</p>
                            <p>CSR Projects Approved by Board for FY 2022-23</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------- PML CODE OF FAIR DISCLOSURE -------------------------- */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>PML CODE OF FAIR DISCLOSURE</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(5)}>{selectedTitle === 5 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 5 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            <h4>PML CODE OF FAIR DISCLOSURE</h4>
                            <p>PML Code of Fair Disclosure</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------- Board of Directions ---------------------------------------- */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>BOARD OF DIRECTORS</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(6)}>{selectedTitle === 6 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 6 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            <h4>BOARD OF DIRECTORS</h4>
                            <p>List of Board of Directors</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------- RTA --------------------------------------- */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>RTA</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(7)}>{selectedTitle === 7 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 7 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            <h4>RTA INFORMATION: M/s ALANKIT ASSIGNMENTS LIMITED</h4>
                            <p>Registered Address: 205-208, ANARKALI COMPLEX, JHANDEWALAN EXTENSION, NEW DELHI-110055Corporate Office: Alankit Hosue, 4E/2, Jhandewalan Extension, New Delhi-110055.</p>
                            <p>Website: www.alankit.comPhone: #011-4254 1234</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------ Nodal officer under Investor education and Protection fund authority ------ */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>Nodal officer under Investor education and Protection fund authority</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(8)}>{selectedTitle === 8 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 8 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            {/* <h4></h4> */}
                            <p>Mr. Hardam Singh</p>
                            <p>Email ID: cs@paulmerchants.net</p>
                            <p>Phone No: 0172-5041760</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------ REGISTRATION OF KYC & OTHER DETAILS ------------------- */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>REGISTRATION OF KYC & OTHER DETAILS</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(9)}>{selectedTitle === 9 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 9 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            {/* <h4></h4> */}
                            <p>Registration of KYC and other Details</p>
                            <p>Circular dated November 03, 2021</p>
                            <p>Clarifications with respect to Circular dated November 03, 2021</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------- FORM SH-13 & SH-14 ---------------------------  */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>FORM SH-13 & SH-14</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(10)}>{selectedTitle === 10 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 10 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            {/* <h4></h4> */}
                            <p>FORM SH-13 & SH-14</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------- UNPAID DIVIDENDS ------------------------------*/}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>UNPAID DIVIDENDS</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(11)}>{selectedTitle === 11 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 11 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            {/* <h4></h4> */}
                            <p>Unclaimed Dividend 2019-20</p>
                            <p>Unclaimed Dividend 2019-20 as of 31.03.2020</p>
                            <p>Unclaimed Dividend 2019-20 as of 31.03.2021</p>
                            <p>Unclaimed Dividend 2019-20 as on 31.03.2022</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------- AMENDMENT IN REGULATION 40 --------------------------------*/}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>AMENDMENT IN REGULATION 40</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(12)}>{selectedTitle === 12 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 12 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            {/* <h4></h4> */}
                            <p>Procedure for Dematerialisation of Shares</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------Disclosure of related party transactions under Reg23(9) of SEBI (LODR) -----  */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>Disclosure of related party transactions under Reg23(9) of SEBI (LODR)</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(13)}>{selectedTitle === 13 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 13 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            {/* <h4></h4> */}
                            <p>Consolidated Related Party Transactions for the half year ended 31st March, 2019</p>
                            <p>Consolidated Related Party Transactions for the half year ended 30th September, 2019</p>
                            <p>Consolidated Related Party Transactions for the half year ended 31st March, 2020</p>
                            <p>Consolidated Related Party Transactions for the half year ended 30th September, 2020</p>
                            <p>Consolidated Related Party Transactions for the half year ended 31st March, 2021</p>
                            <p>Consolidated Related Party Transactions for the half year ended 30th September, 2021</p>
                            <p>Consolidated Related Party Transactions for the half year ended 31st March 2022</p>
                            <p>Consolidated Related Party Transactions for the half year ended 30th September 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------- CLOSURE OF TRADING WINDOW ----------------------------- */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>CLOSURE OF TRADING WINDOW</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(14)}>{selectedTitle === 14 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 14 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            {/* <h4></h4> */}
                            <p>Closure of Trading Window for Qtr ending June 2019</p>
                            <p>Closure of Trading Window for Qtr ending Sep 2019</p>
                            <p>Closure of Trading Window for Qtr ending Dec 2019</p>
                            <p>Closure of Trading Window for quarter ending March 2020</p>
                            <p>Closure of Trading Window for quarter ending June 2020</p>
                            <p>Closure of Trading Window for quarter ending September 2020</p>
                            <p>Closure of Trading Window for quarter ending December 2020</p>
                            <p>Closure of Trading Window for quarter ending March 2021</p>
                            <p>Closure of Trading Window for quarter ending June 2021</p>
                            <p>Closure of Trading Window for Quarter ending September 2021</p>
                            <p>Closure of Trading Window for Quarter ending December 2021</p>
                            <p>Closure of Trading Window for Quarter ending March 2022</p>
                            <p>Closure of Trading Window for Quarter ended June 2022</p>
                            <p>Closure of Trading Window for Quarter and half year ending September 2022</p>
                            <p>Closure of Trading Window for the Quarter ended December 2022</p>
                            <p>Closure of Trading Window for Quarter and Nine Months ending December 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------- SOP FOR DISPUTE RESOLUTION --------------------- */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>SOP FOR DISPUTE RESOLUTION</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(15)}>{selectedTitle === 15 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 15 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            {/* <h4></h4> */}
                            <p>SOP for Dispute Resolution</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------- ANNUAL RETURNS OF GROUP COMPANIES ---------------------- */}
            <div className="investors-parent-container">
                <div className="investor-title-description">
                    <h2 className='gradient-text-h2' style={{ margin: '0' }}>ANNUAL RETURNS OF GROUP COMPANIES</h2>
                    <h2 className='title-arrow' onClick={() => handleShowAnswer(16)}>{selectedTitle === 16 ? "⬆️" : "⬇️"}</h2>
                </div>
                <div className={selectedTitle === 16 ? "investors-desciption-parent" : "display_none"}>
                    <div className="investor-descriptions">
                        <div className="investors-description-details">
                            {/* <h4></h4> */}
                            <p>Paul Overseas Pvt. Ltd.</p>
                            <p>Paul Excursions Pvt. Ltd.</p>
                            <p>Paul Instacred Pvt. Ltd.</p>
                            <p>Paul Fincare Pvt. Ltd.</p>
                            <p>PML Realtors Pvt. Ltd.</p>
                            <p>Collective Media Ventures Pvt. Ltd.</p>
                            <p>BBSM Films Pvt. Ltd.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Investors;