import React from 'react';
import "./CustomerSupreme.css";

function CustomerSupreme() {
    return <>
        <div className="customer-supreme-herosection">
            <div className="customer-supreme-herosection-left">
                <h2 className='hero_section_title_h2'>Customer is Supreme</h2>
            </div>
            <div className="customer-supreme-herosection-right">
                <img src='CustomerSupHero.svg' alt='Customer' />
            </div>
        </div>
        <div className='customer-supreme-message-container'>
            <div className="customer-supreme-message-img">
                <img src='CustomerSupremeMsg.svg' alt='Message' />
            </div>
            <div className="customer-supreme-message-txt">
                <h2 className='header_title_h2'>Customer is Supreme</h2>
                <p>Over the years, PML has grown and prospered by making its customers its friends and partners in the prosperity. The customer is always with PML in all its thoughts, policies and services. Customer is given a patient ear to what he says, its found out what are his requirements and expectations, it is identified what at PML will make him satisfied and then it is made sure that the same is incorporated in the services and products offered by PML. With its motto of providing “Service Up To The Utmost Satisfaction Of The Customer”, PML has been able to reach out to the hearts of millions of people .</p>
                <p>At Paul Merchants Limited, we believe in providing value-rich services to our esteemed clientele across various industrial domains. In fact, we consider customers at the core of our premier services and policies to transform business operations and drive growth across the length and breadth of the country. Our specialized multi-verticals customer services generate business impact with its range of customized solutions.</p>
                <p>It’s our constant endeavor to evolve customer solutions and services to achieve the ultimate level of customer satisfaction. We take pride in driving operational excellence and superior customer value through our well researched and verified products and services. Owing to our undeterred commitment towards providing world-class services, we manifest ultimate transparency and integrity in our conduct while dealing with the with customers</p>
            </div>
        </div>
    </>
}

export default CustomerSupreme;