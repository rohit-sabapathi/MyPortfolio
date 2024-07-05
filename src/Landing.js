import React from 'react';

function Landing(){
    return(
        <section className='landing' id='home'>
            <img src={`${process.env.PUBLIC_URL}/rooo.jpeg`} alt='My Photo'/>
            <p>My name is Rohit Sabapathi , you can call me Rohit. I'm currently pursuing my Diploma in Computer Science at Thiagarajar Polytechnic College Salem, Tamil Nadu , India.
                I'm currently in the adventure of gaining Knowledge and Skills to Conclude my Aim.
                My Aim is to provide my contributions as ideas and implementing it , to improve and help in the growth of the emerging Technologies.
                I'm a person who thrives to put Hard work and Smart work by pushing my limits to Accomplish my Goal to the Time.
                A <span title="
                    A koinophobic person is someone who has an intense fear of living an ordinary or mundane life. 
                    People with this fear often strive to avoid a routine or conventional existence, seeking unique, adventurous, or extraordinary experiences to feel fulfilled.">
                        Koinophobic </span> 
                who is trying to live his life to The Fulfillment.
            </p>
        </section>
    );
};

export default Landing;