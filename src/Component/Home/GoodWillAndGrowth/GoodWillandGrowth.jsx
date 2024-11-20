import React, { useEffect, useState } from 'react';
import "./GoodWillandGrowth.css";

function GoodWillandGrowth() {
    const [initialState,setInitialState]=useState(0);
    const [animation,setAnimation]=useState(false)
    useEffect(()=>{
        const interval=setInterval(()=>{
            setInitialState(initialState + 1)
        },3000)
        return clearInterval(interval)
    },[initialState])
    
    const callAnimation=()=>{
        if(animation%2 === 0){
            setAnimation(true)
        }
        else {
            setAnimation(false)
        }
    }
    useEffect(()=>{
        callAnimation()
    },[initialState])

    return (
        <div className='goodwill-and-growth-parent-container'>
            <div className='goodwill-and-growth-container'>
                <h2>Goodwill & Growth</h2>
                <p>We have earned both!</p>
                <div className='goodwill-content' id={animation ? "animation-true":""}>
                    <div className="year-of-establish">
                        <h3>31+</h3>
                        <h4>Years</h4>
                        <h5>Bussiness Expertise</h5>
                    </div>
                    <div className="total-employees">
                        <h3>1000+</h3>
                        <h4>Employees</h4>
                        <h5>Working PAN India</h5>
                    </div>
                    <div className="total-offices">
                        <h3>171+</h3>
                        <h4>Offices</h4>
                        <h5>All over India</h5>
                    </div>
                    <div className="total-customers">
                        <h3>3M+</h3>
                        <h4>Customers</h4>
                        <h5>Timely Served</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoodWillandGrowth