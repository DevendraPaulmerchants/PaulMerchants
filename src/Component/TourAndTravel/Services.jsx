import React from 'react';
import './TourAndTravel.css';

function Services() {
  return (
    <div className='visa-why-choose-us-container'>
       <h2>Services</h2>
       <div className="visa-why-choose-us-main-container">
        <div className="visa-why-choose-us-child-container">
            <div className="visa-why-choose-us-header">
                <div className="visa-why-choose-us-left-header">
                    <h3>Flights</h3>
                    <button>Book Now</button>
                </div>
                <div className="visa-why-choose-us-right-header travel-flight">
                    <img src='TravelFlight.svg' alt='Travel Flight'/>
                </div>
            </div>
            <div className='visa-why-choose-us-description'>
               <p>Explain your requirement of booking a ticket and we can get it booked for you. We have tie-ups with almost all the airlines across the globe, enabling us to offer tickets be it a national tour or an international trip. You can book tickets based on travel duration, rates and offers or airline, all we guarantee is a hassle-free ticket booking.</p>
            </div>
        </div>
        <div className="visa-why-choose-us-child-container">
            <div className="visa-why-choose-us-header">
                <div className="visa-why-choose-us-left-header">
                    <h3>Accomodations</h3>
                    <button>Book Now</button>
                </div>
                <div className="visa-why-choose-us-right-header travel-hotel">
                    <img src='TravelHotel.svg' alt='Travel Accomodations'/>
                </div>
            </div>
            <div className='visa-why-choose-us-description'>
               <p>We provide complete assistance in booking the best hotel accommodates in most of the popular touring locations. At attractive prices and top-notch amenities, our aligned hotel accommodations offer supremely comfortable experience as long as you stay.</p>
            </div>
        </div>
        <div className="visa-why-choose-us-child-container">
            <div className="visa-why-choose-us-header">
                <div className="visa-why-choose-us-left-header">
                    <h3>Buses</h3>
                    <button>Book Now</button>
                </div>
                <div className="visa-why-choose-us-right-header travel-bus">
                    <img src='TravelBus.svg' alt='Travel Bus'/>
                </div>
            </div>
            <div className='visa-why-choose-us-description'>
               <p>If you wish to tour around the destination, we can book special bus tours to make your trip a thrilling ride. We have allied with some of the most preferred tourists’ bus services in most of the popular destinations to spruce up your travel experience at attractive rates.</p>
            </div>
        </div>
        <div className="visa-why-choose-us-child-container">
            <div className="visa-why-choose-us-header">
                <div className="visa-why-choose-us-left-header">
                    <h3>Cruises</h3>
                    <button>Book Now</button>
                </div>
                <div className="visa-why-choose-us-right-header travel-cruise">
                    <img src='TravelCruises.svg' alt='Travel Cruises'/>
                </div>
            </div>
            <div className='visa-why-choose-us-description'>
               <p>While traveling is fun, but nothing beats a luxurious cruise. Our travel consultants can help you book many popular cruise lines and ships through our aligned partnership in some of the happening spots around the world. Priced at unbelievable booking rates, you would surely try it once.</p>
            </div>
        </div>
        <div className="visa-why-choose-us-child-container">
            <div className="visa-why-choose-us-header">
                <div className="visa-why-choose-us-left-header">
                    <h3>Holidays</h3>
                    <button>Book Now</button>
                </div>
                <div className="visa-why-choose-us-right-header travel-holiday">
                    <img src='TravelHolidays.svg' alt='Travel Holidays'/>
                </div>
            </div>
            <div className='visa-why-choose-us-description'>
               <p>You can choose the best location in India and abroad through our exclusive holiday packages. Perfectly priced, these holiday packages offer a wide range of tours with essential sightseeing and other popular activities, hotel accommodations, food, spa etc. Personalized to meet your coveted tastes and preferences, our holiday packages also offer irresistible holiday deals to provide an unparalleled experience.</p>
            </div>
        </div>
        <div className="visa-why-choose-us-child-container">
            <div className="visa-why-choose-us-header">
                <div className="visa-why-choose-us-left-header">
                    <h3>Forex</h3>
                    <button>Book Now</button>
                </div>
                <div className="visa-why-choose-us-right-header travel-forex">
                    <img src='TravelForex.svg' alt='Travel Forex'/>
                </div>
            </div>
            <div className='visa-why-choose-us-description'>
               <p>We offer a host of forex services for completing your travel needs during an overseas stay. With our smart forex services, we assure you to offer a hassle-free international tour be it for leisure or business.</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Services