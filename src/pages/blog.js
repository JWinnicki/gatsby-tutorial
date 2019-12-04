import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from "../components/layout";
import blogStyles from './blog.module.scss';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `);

    const renderPostsList = () => {
        return data.allContentfulBlogPost.edges.map(el => {
            return (
                <li className={blogStyles.post} key={el.node.title}>
                    <Link to={`/blog/${el.node.slug}`}>
                        <h2>{el.node.title}</h2>
                        <p>{el.node.publishedDate}</p>
                    </Link>
                </li>
            );
        });
    }

    return (
        <Layout>
            <h1>My Blog</h1>
            <ol className={blogStyles.posts}>
                {renderPostsList()}
            </ol>
        </Layout>
    );
}

export default BlogPage;