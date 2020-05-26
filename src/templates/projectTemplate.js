import React from 'react'
import Header from '../../components/header'
import Layout from '../../components/layout'

const styles = {
    link: {
        backgroundImage: 'none',
        color: 'black',
    },
}

const ProjectLink = props => (
        <a style={styles.link} href={props.to} download={props.download}><u>{props.children}</u></a>
)

export default function projectTemplate() {
    return (
        <Layout>
            <Header headerText={'Project Name'} />
            <p>Project body</p>
        </Layout>
    )
}