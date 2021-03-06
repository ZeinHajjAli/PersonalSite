import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import SiteHelmet from '../components/helmet'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import { FaOrcid } from 'react-icons/fa'

const styles = {
    homepage: {
        // margin: '3rem auto',
        // maxWidth: 400,
        // padding: '0 1rem',
    },
    name: {
        fontFamily: 'Roboto Slab',
        fontSize: 40,
        // textAlign: 'center',
        color: 'black',
    },
    link: {
        backgroundImage: 'none',
        color: 'black',
    },
    iconRow:{
        textAlign: 'center',
        margin: '80px 0 0 0',
    },
    favicon: {
        fontSize: 40,
    },
    body: {
        fontSize: 25,
    },
}

export default function Home() {
    return (
        <Layout>
            <SiteHelmet titleText={"Home"} />
            <Header headerText={""} />
            <div style={styles.homepage}>
            <p style={styles.body}>Hi, my name is </p> 
            <p style={styles.name}>Zein Hajj-Ali</p>
            <p style={styles.body}>I'm a Computer Systems Engineer-In-Training, and this is my project site. You can take a look at my resume <a style={styles.link} href="/resume/HajjAliZein-Resume.pdf"><u>here.</u></a></p>
            <p style={styles.iconRow}>
                <a style={styles.link} href="https://github.com/ZeinHajjAli" target="_blank" rel="noopener noreferrer"> <AiFillGithub style={styles.favicon}/> </a>
                <a style={styles.link} href="https://www.linkedin.com/in/zeinhajjali/" target="_blank" rel="noopener noreferrer"> <AiFillLinkedin style={styles.favicon}/> </a>
                <a style={styles.link} href="https://orcid.org/0000-0003-3919-1193" target="_blank" rel="noopener noreferrer"> <FaOrcid style={styles.favicon}/> </a>
                <a style={styles.link} href="mailto:zeinhajjali@outlook.com" target="_blank" rel="noopener noreferrer"> <AiFillMail style={styles.favicon}/> </a>
            </p>
            </div>
        </Layout>
    )
}
