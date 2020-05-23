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
        // textShadow: 'none',
        backgroundImage: 'none',
    },
    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
    },
    bodyText: {
        textAlign: 'justify',
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
            <header style={styles.header}>
                <Link to='/' style={styles.titleLink}>
                    <h3 style={styles.title}>Zein Hajj-Ali</h3>
                </Link>
                <ul style={styles.ulStyle}>
                    <ListLink to='/'>Home</ListLink>
                    <ListLink to='/about'>About</ListLink>
                    <ListLink to='/contact'>Contact</ListLink>
                </ul>
            </header>
            <div style={styles.bodyText}>
                {children}
            </div>
            <footer style={styles.footer}>
                © 2020 Zein Hajj-Ali · <a style={{backgroundImage: 'none'}} href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>
            </footer>
        </div>
    )
}
