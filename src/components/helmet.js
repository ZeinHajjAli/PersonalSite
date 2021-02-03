import React from 'react'
import { Helmet } from 'react-helmet'
// import { Link } from "gatsby"

export default function SiteHelmet(props) {
    return (
        <Helmet>
            <meta charSet='utf-8' />
            <title>{props.titleText} | ZeinHajjAli</title>
        </Helmet>
    )
}
