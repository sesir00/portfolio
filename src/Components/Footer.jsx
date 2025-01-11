import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="footer-column">
                        <h3>About the store</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Become a person</a></li>
                            <li><a href="#">About me</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Language</h3>
                        <div className="languages">
                            <a href="#" data-lang="de">Deutsch</a>
                            <a href="#" data-lang="en" className="active">English</a>
                            <a href="#" data-lang="es">Español</a>
                            <a href="#" data-lang="fr">Français</a>
                            <a href="#" data-lang="id">Indonesian</a>
                            <a href="#" data-lang="it">Italian</a>
                            <a href="#" data-lang="nl">Nederlands</a>
                            <a href="#" data-lang="pl">Polnisch</a>
                            <a href="#" data-lang="pt">Português</a>
                            <a href="#" data-lang="ru">русский</a>
                            <a href="#" data-lang="vi">Tiếng Việt</a>
                            <a href="#" data-lang="tr">Türkçe</a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Get in touch</h3>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/shishir.chapagain.999/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://x.com/sesi_rma" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/shishir-chapagain-198683226/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/see_sir00/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Security and privacy</a>
                    <a href="#">Newsletter</a>
                    <a href="#">Copyright &shishir</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
