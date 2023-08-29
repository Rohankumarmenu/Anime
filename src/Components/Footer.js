
import React from 'react';
import './Footer.css'
function Footer() {
    return (
        <footer className="footer">
            <div className="container1">
                <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>Popular Anime</h1>
                <ol>
                    <li>Fullmetal Alchemist: Brotherhood</li>
                    <li>Steins:Gate</li>
                    <li>Bleach: Sennen Kessen-hen</li>
                    <li>Gintama</li>
                    <li>Shingeki no Kyojin Season 3 Part 2</li>
                </ol>

                <div className="footer-content" >

                    <div className="social-links">
                        <a href="https://github.com/Rohankumarmenu/Anime" target="_blank" rel="noopener noreferrer">
                            <img src='https://img.icons8.com/?size=512&id=sbhfmWq4KRr1&format=png' alt="github logo " style={{
                                width: '50px',
                                height: '50px',
                            }}></img>
                        </a>

                        <a href="https://www.linkedin.com/in/rohan-kr/" target="_blank" rel="noopener noreferrer">
                            <img src='https://img.icons8.com/?size=512&id=67570&format=png' alt="LinkedIn logo " style={{
                                width: '50px',
                                height: '50px',
                            }}></img>
                        </a>

                        <a href="https://www.youtube.com/user/your-youtube-channel" target="_blank" rel="noopener noreferrer">
                            <img src='https://img.icons8.com/?size=512&id=67627&format=png' alt="LinkedIn logo " style={{
                                width: '50px',
                                height: '50px',
                            }}></img>

                        </a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Your Anime Website</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
