import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import SiteHelmet from '../components/helmet'

const styles = {
    link: {
        backgroundImage: 'none',
        color: 'black',
    },
}

export default function About() {
    return (
        <Layout>
            <SiteHelmet titleText={"About Me"} />
            <Header headerText={'About Me'} />
            
            <p>Hi, <br/> <br/> Welcome to my tiny site. I’m a Computer Systems Engineer-In-Training. I recieved my Bachelor of Engineering in February 2020, and am starting my Master of Applied Science in Electrical and Computer Engineering in the fall of 2020. This site is just a way for me to keep a public log of my projects, no matter their nature. I hope to be updating whenever something worth posting about comes up but I might end up with a backlog of posts that I want to get to.</p>
            
            <p>You can download my résumé/CV here: <a style={styles.link} href="/resume/HajjAliZein-Resume.docx"><u>Word file</u></a> or <a style={styles.link} href="/resume/HajjAliZein-Resume.pdf" download="HajjAliZein-Resume.pdf"><u>pdf</u></a></p>
        </Layout>
    )
}
