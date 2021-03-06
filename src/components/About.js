import React from 'react'

const About = () =>{

    return(
        <div className="About" id="about">

            <div className="AboutImage">
            <img
                src="https://storage.googleapis.com/alexis-web-portfolio-bucket/memoji.png"
                alt="avatar"
                />
            </div>

            <div className="AboutText">
                <h1>About Me</h1>
                <p>I am a Panamanian software engineer who loves learning new things, being part of a team and working hard. 
                    My current goal is to become a truly Full Stack Web Developer. 
                    My frontend  tool is React. For backend I work with MySQL and Google Cloud Platform. 
                    In my university studies I learnt some tools and languages like:C, Java, HTML, CSS, PHP, Python, SQL, Docker, Linux, Cisco OS, Android and AWS,
                    and last but not least many techniques, best practices and paradigms of Software Engineering. </p>
            </div>
        </div>
    )
}

export default About;