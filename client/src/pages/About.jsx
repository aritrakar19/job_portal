import React from 'react';

const About = () => {
    return (
        <section
            className="about-section"
            style={{
                padding: '100px 20px',
                backgroundColor: '#fff',
            }}
        >
            <div
                className="container"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                {/* Text Content */}
                <div style={{ flex: '1 1 55%', paddingRight: '30px', marginTop: '80px',marginLeft: '30px' }}>
                    <p style={{ color: '#ff2b7b', fontWeight: '600', marginBottom: '1rem' }}>
                        WHAT WE ARE DOING
                    </p>
                    <h2
                        style={{
                            fontSize: '3rem',
                            fontWeight: '700',
                            color: '#1A1A40',
                            marginBottom: '1.5rem',
                            lineHeight: '1.2',
                        }}
                    >
                        Empowering Talent<br />Connecting Opportunities
                    </h2>
                    <p
                        style={{
                            fontSize: '1.1rem',
                            fontWeight: '500',
                            color: '#1A1A40',
                            marginBottom: '1.5rem',
                        }}
                    >
                        NovaNectar is a modern job portal built to bridge the gap between talent and opportunity.
                        We help job seekers find their dream roles while enabling companies to discover top-tier talent.          </p>
                    <p style={{ color: '#5a5a5a', lineHeight: '1.8' }}>
                        Our platform is designed with simplicity and speed in mind, ensuring a seamless experience for both applicants and employers.
                        Whether you're just starting out or a seasoned professional, NovaNectar is your partner in success.          </p>
                </div>

                {/* Sticky Image */}
                <div
                    style={{
                        flex: '1 1 40%',
                        position: 'sticky',
                        top: '120px', // 👈 adjusts how "sticky" starts
                        alignSelf: 'flex-start',
                        backgroundAttachment: 'fixed',
                    }}
                >
                    <img
                        src="https://themewagon.github.io/jobfinderportal/assets/img/service/support-img.jpg"
                        alt="Support"
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            height: 'auto',
                            borderRadius: '10px',
                            objectFit: 'cover',
                            display: 'block',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            backgroundAttachment: 'fixed',
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
