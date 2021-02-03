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

export default function Contact() {
    return (
        <Layout>
            <SiteHelmet titleText={"Contact Me"} />
            <Header headerText="Contact Me" />
            <p>You can contact me using any of the following:</p>
            <ul>
                <li>Email: <a style={styles.link} href="mailto:zeinhajjali@outlook.com"><u>zeinhajjali@outlook.com</u></a></li>
                <li>Telephone: <a style={styles.link} href="tel:+15148144665"><u>+1-(514)-814-4665</u></a></li>
                <li>LinkedIn: <a style={styles.link} href="https://linkedin.com/in/zeinhajjali"><u>Zein Hajj-Ali</u></a></li>
            </ul>
        </Layout>
    )
}
