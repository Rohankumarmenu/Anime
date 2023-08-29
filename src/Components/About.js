

import React from 'react';

function About() {
    return (
        <>
        <div className='aboutsec'  style={{ backgroundColor: 'black' }}>
            <h1 style={{ fontSize: '70px', color: 'blue', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                About Us
            </h1>
            <br></br>
            <br></br>
            <div className='aboutimage' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                    src='https://cdn.myanimelist.net/images/about/overview/head-bg@2.png?v=170130'
                    alt="Anime List"
                    style={{
                        width: '75%',
                        height: '250px',
                        margin: '0 auto', // Center the image horizontally
                        border: '2px solid #333', // Add a border around the image
                        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
                    }}
                />
            </div>
            <br></br>
            <br></br>
            <div className='leftimg' style={{ alignItems: 'Center', color:'blue'}}>
                <p> Which titles do you like </p>
                <img
                    src='https://cdn.myanimelist.net/images/about/overview/fig02_1@2.png?v=170130'
                    alt="fig 02"
                    style={{
                        width: '35%',
                        height: '200px',
                        margin: '0 auto', // Center the image horizontally
                        border: '2px solid #333', // Add a border around the image
                        borderRadius: '15px',
                    }}
                />
            </div>
            <div className='rightimg'>
                <p style={{ marginBottom: '10px', textAlign: 'right',color:'blue' }}>

                    who else is online
                </p>
                <img
                    src='https://cdn.myanimelist.net/images/about/overview/fig02_2@2.png?v=170130'
                    alt="fig 02"
                    style={{
                        width: '35%',
                        height: '150px',
                        margin: '0 auto',
                        float: 'right',
                        border: '2px solid #333', // Add a border around the image
                        borderRadius: '15px',

                    }}
                />
            </div>
            <p style={{ fontSize: '16px', color: 'darkblue', marginTop: '20px', textAlign: 'center' }}>
                This is a website about anime. We provide information about anime, such as
                news, reviews, and recommendations.<br></br>

                We are a team of anime fans who are passionate about sharing our love
                of anime with the world.
                <br></br>
                If you have any questions or feedback, please feel free to contact us.
            </p>

            
            </div>
        </>
    );
}

export default About;
