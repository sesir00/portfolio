import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#skill">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contactform">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Language</h3>
                    <div className="languages">
                        <a href="#" data-lang="en" className="active">English</a>
                        <a href="#" data-lang="es">Español</a>
                        <a href="#" data-lang="fr">Français</a>
                        <a href="#" data-lang="de">Deutsch</a>
                        <a href="#" data-lang="it">Italiano</a>
                        <a href="#" data-lang="pt">Português</a>
                        <a href="#" data-lang="ru">Русский</a>
                        <a href="#" data-lang="zh">中文</a>
                        <a href="#" data-lang="ja">日本語</a>
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Connect</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/shishir.chapagain.999/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://x.com/sesi_rma" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/shishir-chapagain-198683226/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/see_sir00/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://github.com/sesir00" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">© 2025 Shishir Chapagain</a>
            </div>
        </footer>
    )
}

export default Footer