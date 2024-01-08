import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
        className="p-10">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/appoinment" className="link link-hover">Cavity Filling</Link>
                    <Link to="/appoinment" className="link link-hover">Fluoride Treatment</Link>
                    <Link to="/appoinment" className="link link-hover">Root Canel</Link>
                    <Link to="/appoinment" className="link link-hover">Teeth Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">Our Pages</span>
                    <Link to="/about" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/appoinment" className="link link-hover">Appointment</Link>
                    <Link to="/" className="link link-hover">Home</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/about" className="link link-hover">Terms of use</Link>
                    <Link to="/about" className="link link-hover">Privacy policy</Link>
                </div>
            </div>
            <div className='text-center mt-32'>
                <p>Copyright © 2024 - All right reserved by NBTEN Tech Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;