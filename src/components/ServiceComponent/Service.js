import { useState, useEffect } from 'react';
import './Service.css';
import axios from 'axios';

function Service() {


    return (
        <>

            <body>
                <div class="header">
                    <h1>Our Services</h1>
                    <p>Professional Moving & Packing Solutions for Every Need</p>
                </div>

                <div class="container">
                    <div class="services-grid">
                        <div class="service-card">
                            <div class="service-icon">🏠</div>
                            <h3>Home Relocation</h3>
                            <p>Complete household moving services with care and precision. We handle everything from packing to unpacking.</p>
                            <ul>
                                <li>Full packing services</li>
                                <li>Furniture disassembly & assembly</li>
                                <li>Safe transportation</li>
                                <li>Unpacking & arrangement</li>
                            </ul>
                            <button class="btn-quote">Get Quote</button>
                        </div>

                        <div class="service-card">
                            <div class="service-icon">🏢</div>
                            <h3>Office Relocation</h3>
                            <p>Minimize downtime with our efficient office moving services. We understand business needs.</p>
                            <ul>
                                <li>IT equipment handling</li>
                                <li>Document management</li>
                                <li>After-hours moving</li>
                                <li>Setup at new location</li>
                            </ul>
                            <button class="btn-quote">Get Quote</button>
                        </div>

                        <div class="service-card">
                            <div class="service-icon">📦</div>
                            <h3>Packing Services</h3>
                            <p>Professional packing with high-quality materials to ensure your belongings are protected.</p>
                            <ul>
                                <li>Premium packing materials</li>
                                <li>Fragile item protection</li>
                                <li>Labeling & inventory</li>
                                <li>Custom crating available</li>
                            </ul>
                            <button class="btn-quote">Get Quote</button>
                        </div>

                        <div class="service-card">
                            <div class="service-icon">🚛</div>
                            <h3>Local Moving</h3>
                            <p>Fast and reliable local moving services within the city and nearby areas.</p>
                            <ul>
                                <li>Same-day service available</li>
                                <li>Multiple vehicle options</li>
                                <li>Experienced staff</li>
                                <li>Affordable pricing</li>
                            </ul>
                            <button class="btn-quote">Get Quote</button>
                        </div>

                        <div class="service-card">
                            <div class="service-icon">🌍</div>
                            <h3>Long Distance Moving</h3>
                            <p>Nationwide moving services with tracking and timely delivery guaranteed.</p>
                            <ul>
                                <li>Interstate relocation</li>
                                <li>GPS tracking</li>
                                <li>Insurance coverage</li>
                                <li>Scheduled delivery</li>
                            </ul>
                            <button class="btn-quote">Get Quote</button>
                        </div>

                        <div class="service-card">
                            <div class="service-icon">📦</div>
                            <h3>Storage Solutions</h3>
                            <p>Secure storage facilities for short-term and long-term needs with 24/7 monitoring.</p>
                            <ul>
                                <li>Climate controlled units</li>
                                <li>24/7 security</li>
                                <li>Flexible rental terms</li>
                                <li>Easy access</li>
                            </ul>
                            <button class="btn-quote">Get Quote</button>
                        </div>
                    </div>

                    <div class="features">
                        <div class="feature-box">
                            <div class="feature-number">15+</div>
                            <h4>Years Experience</h4>
                            <p>Trusted service since 2009</p>
                        </div>
                        <div class="feature-box">
                            <div class="feature-number">5000+</div>
                            <h4>Happy Customers</h4>
                            <p>Satisfied clients nationwide</p>
                        </div>
                        <div class="feature-box">
                            <div class="feature-number">24/7</div>
                            <h4>Support Available</h4>
                            <p>Always here to help you</p>
                        </div>
                        <div class="feature-box">
                            <div class="feature-number">100%</div>
                            <h4>Safe Delivery</h4>
                            <p>Guaranteed protection</p>
                        </div>
                    </div>
                </div>

                <div class="cta-section">
                    <h2>Ready to Move?</h2>
                    <p>Get a free quote today and experience stress-free moving</p>
                    <button class="cta-button">Contact Us Now</button>
                </div>
            </body>

        </>
    );
}

export default Service;




