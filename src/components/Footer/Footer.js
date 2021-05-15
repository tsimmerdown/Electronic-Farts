import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { responsive } from "../../data/responsive"

const Cont = styled.div`
  width: 100%;
  background: rgb(243, 243, 243);
  padding: 26px 118px 48px;
  min-height: 250px;
  @media screen and (max-width: ${responsive.tablet}px) {
    padding: 22px 60px 30px;
  }

  section {
    margin: auto;
  }
`
const FooterLinks = styled.div`
  display: flex;
  padding-left: 32px;

  @media screen and (max-width: ${responsive.mini}px) {
    flex-wrap: wrap;
  }
`
const FooterLink = styled.div`
  margin: 16px 48px 10px 0;
  font-family: Oswald;

  @media screen and (max-width: ${responsive.tablet}px) {
    margin-right: 32px;
  }
  @media screen and (max-width: ${responsive.mini}px) {
    margin: 5px 25px 10px 0;
    flex-wrap: wrap;
  }
`

const Legal = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 640px;
  padding: 10px 0 0 32px;
`
const LegalLinks = styled.div`
  padding: 1px 32px 3px 0px;
`
const Mobile = styled.div`
  @media only screen and (min-width: ${responsive.tablet}px) {
    display: none;
  }
`

const Desktop = styled.div`
  @media only screen and (max-width: ${responsive.tablet}px) {
    display: none;
  }
`

const Footer = () => {
  return (
    <Cont>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Desktop style={{ minWidth: "55px" }}>
          <StaticImage
            src="../../assets/images/Logo.png"
            width={70}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="EA Logo"
            style={{ marginBottom: `1.45rem` }}
          />
        </Desktop>
        <div>
          <Mobile>
            <StaticImage
              src="../../assets/images/Logo.png"
              width={60}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="EA Logo"
              style={{ marginBottom: `1.45rem`, marginLeft: "20px" }}
            />
          </Mobile>

          <FooterLinks data-testid="footer-links">
            <FooterLink>Game Library</FooterLink>
            <FooterLink>Subscribe</FooterLink>
            <FooterLink>Origin</FooterLink>
            <FooterLink>About</FooterLink>
            <FooterLink>Accessibility</FooterLink>
            <FooterLink>Help</FooterLink>
          </FooterLinks>
          <Legal data-testid="legal">
            <LegalLinks>Legal</LegalLinks>
            <LegalLinks>User Agreement</LegalLinks>
            <LegalLinks>
              Privacy & Cookie Policy (Your Privacy Rights)
            </LegalLinks>
            <LegalLinks>Online Service Updates</LegalLinks>
            <LegalLinks>Security</LegalLinks>
            <LegalLinks>YouTube Terms of Service</LegalLinks>
            <LegalLinks>Google Privacy Policy</LegalLinks>
          </Legal>
          <p style={{ margin: "20px 0 0 32px" }}>
            <span role="img" aria-label="jsx-a11y/accessible-emoji">
              ©️
            </span>
            2021 Electronic Farts Inc.
          </p>
        </div>
      </section>
    </Cont>
  )
}

export default Footer
