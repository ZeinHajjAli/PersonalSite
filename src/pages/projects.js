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

            <ListLink to='/projects/maskEffectsModel'><strong>22/12/20:</strong> Effects of Different Masks on the Spread of Viral Particles</ListLink>
            <ListLink to='/projects/modelingCO2Classroom'><strong>13/11/20:</strong> Modeling CO<sub>2</sub> in a Classroom with Barriers</ListLink>
            <ListLink to='/projects/typicalHomeNetwork'><strong>24/10/20:</strong> Modeling a Typical Home Network</ListLink>
            <ListLink to='/projects/gyroscopeRobot'><strong>25/05/19:</strong> Gyroscope Self-Balancing Robot</ListLink>
            <ListLink to='/projects/northernNomad'><strong>25/05/19:</strong> Northern Nomad System Integration Project</ListLink>
        </Layout>
    )
}
