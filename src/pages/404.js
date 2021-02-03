import React from 'react'
import Layout from '../components/layout'

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
    topText: {
        fontSize: 100,
        textAlign: 'center',
    },
    bottomText: {
        fontSize: 25,
        textAlign: 'center',
    },
}

export default function PageNotFound() {
    return (
        <Layout>
            <h1 style={styles.topText}>404</h1>

            <p style={styles.bottomText}>Sorry, the page you were looking for does not exist.</p>
        </Layout>
    )
}
