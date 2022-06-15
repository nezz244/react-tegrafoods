import React from 'react'
import { FooterContainer,FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink  } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle> About Us </FooterLinkTitle>
                        
                        <FooterLink to="/Shop">We specialise in 100% organic foods </FooterLink>
                        <FooterLink to="/Shop">Delivery Can be arranged</FooterLink>
                        
                   
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle> Contact Us </FooterLinkTitle>
                        
                        <FooterLink to="/Shop">Phone: +27832869745</FooterLink>
                        <FooterLink to="/Shop">Email:</FooterLink>
                        <FooterLink to="/Shop"></FooterLink>
                   
                </FooterLinkItems>

            </FooterLinksWrapper>
            </FooterLinksContainer>

        </FooterWrap>

    </FooterContainer>
  )
}

export default Footer