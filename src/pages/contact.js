import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'

const styles = {

}

export default function Contact() {
    return (
        <Layout>
            <Header headerText="Contact Me" />
            <p>You can contact me using any of the following:</p>
            <ul>
                <li>Email: <a href="mailto:zeinhajjali@outlook.com">zeinhajjali@outlook.com</a></li>
                <li>Telephone: <a href="tel:+15148144665">+1-(514)-814-4665</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/in/zeinhajjali">Zein Hajj-Ali</a></li>
            </ul>
        </Layout>
    )
}
