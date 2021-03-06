import React from 'react'
import { Link } from 'gatsby'

const styles = {
    main: {
        margin: '3rem auto',
        maxWidth: 650,
        padding: '0 1rem',
    },
    header: {
        marginBottom: '1.5rem',
    },
    title: {
        display: 'inline',
    },
    titleLink: {
        textShadow: 'none',
        backgroundImage: 'none',
    },
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
    footer: {
        position: 'relative',
        bottom: 0,
        left: 0,
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
    },
    bodyText: {
        textAlign: 'justify',
        // minHeight: '500px',

    },
    site: {
        marginBottom: '100px',
        minHeight: '510px',
    },
}

const ListLink = props => (
    <li style={styles.listItem}>
        <Link style={styles.link} to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {
    return (
        <div style={styles.main}>
            <div style={styles.site}>
                <header style={styles.header}>
                    <Link to='/' style={styles.titleLink}>
                        <h3 style={styles.title}>Zein Hajj-Ali</h3>
                    </Link>
                    <ul style={styles.ulStyle}>
                        <ListLink to='/'>Home</ListLink>
                        <ListLink to='/projects'>Projects</ListLink>
                        {/* <ListLink to='/blog'>Blog</ListLink> */}
                        <ListLink to='/about'>About</ListLink>
                        <ListLink to='/contact'>Contact</ListLink>
                    </ul>
                </header>
                <div style={styles.bodyText}>
                    {children}
                </div>
            </div>
            <footer style={styles.footer}>
                © 2021 Zein Hajj-Ali · <a style={styles.link} href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>
            </footer>
        </div>
    )
}
