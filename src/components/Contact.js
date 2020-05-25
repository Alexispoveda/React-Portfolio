import React from 'react'
import { Footer, FooterSection, FooterLinkList } from 'react-mdl'


const Contact = () => {

    return (
        <Footer size="mini" id="contact">
            <FooterSection type="left" logo="Thanks for passing by!">
            </FooterSection>
            <FooterSection type="center" logo="Copyright © 2020 Alexis Iván Poveda">
            </FooterSection>
            <FooterSection type="right" logo="Contact Me">
                <FooterLinkList>
                    <a href="https://instagram.com/Alexispoveda" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-instagram" aria-hidden="true" />
                    </a>

                    <a href="https://web.whatsapp.com/send?phone=50769988521" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-whatsapp" aria-hidden="true" />
                    </a>
                    <p>(507) 69988521</p>
                </FooterLinkList>
            </FooterSection>
        </Footer>
    )
}

export default Contact;