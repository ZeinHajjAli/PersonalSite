import React from 'react'
import { Link } from "gatsby"

const styles = {
    main: {
        textAlign: 'center',
    },
    linkStyle: {
        margin: '10px',
        color: 'black',
    }
}

export default function Header(props) {
    return (
        <div style={styles.main}>
            <h1>{props.headerText}</h1>
            <p></p>
        </div>
    )
}
