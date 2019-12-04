import React from 'react';
import { Link } from 'gatsby';

import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>This is about page, I won't write anything here.</p>
            <p>Need a js developer? <Link to='/contact'>Contact me!</Link></p>
        </Layout>
    );
}

export default AboutPage;