import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

const styles = {
    homepage: {
        // margin: '3rem auto',
        // maxWidth: 400,
        padding: '0 1rem',
    },
    name: {
        fontFamily: 'Roboto Slab',
        fontSize: 40,
        textAlign: 'center',
    },
    link: {
        backgroundImage: 'none',
        color: 'black',
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
            <Header headerText={""} />
            <div style={styles.homepage}>
            <p style={styles.body}>Hey! My name is </p> 
            <p style={styles.name}>Zein Hajj-Ali</p>
            
            <p style={styles.body}>I'm a Computer Systems Engineer-In-Training, and this is my project site.</p>
            <p style={{textAlign: 'center'}}>
            <a style={styles.link} href="https://github.com/ZeinHajjAli" target="_blank" rel="noopener noreferrer"> <AiFillGithub style={styles.favicon}/> </a>
            <a style={styles.link} href="https://www.linkedin.com/in/zeinhajjali/" target="_blank" rel="noopener noreferrer"> <AiFillLinkedin style={styles.favicon}/> </a>
            <a style={styles.link} href="mailto:zeinhajjali@outlook.com" target="_blank" rel="noopener noreferrer"> <AiFillMail style={styles.favicon}/> </a>
            </p>
            </div>
        </Layout>
    )
}
