import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import SiteHelmet from '../components/helmet'
import { Link } from 'gatsby'

const styles = {
    ulStyle: {
        listStyle: 'none',
        float: 'right',
    },
    listItem: {
        display: 'inline-block',
        marginRight: '1rem',
    },
    link: {
        color: 'black',
        backgroundImage: 'none',
    },
}

const ListLink = props => (
    <li style={styles.listItem}>
        <Link style={styles.link} to={props.to}><u>{props.children}</u></Link>
    </li>
)

export default function Projects() {
    return (
        <Layout>
            <SiteHelmet titleText={"Projects"} />
            <Header headerText={'Projects'} />

            <ListLink to='/projects/gyroscopeRobot'>May 25th, 2020: Gyroscope Self-Balancing Robot</ListLink>
            <ListLink to='/projects/northernNomad'>May 25th, 2020: Northern Nomad System Integration Project</ListLink>
        </Layout>
    )
}
