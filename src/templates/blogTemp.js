import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';

//dynamic query

export const query = graphql`
  query (
    $slug: String!
  ) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title,
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

//No longer needed, contentful query above ^
/* export const query = graphql`
query (
    $slug: String!
  ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      } 
    ) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`; */

const BlogTemp = props => {
    console.log(props);
    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
        </Layout>
    );
}

export default BlogTemp;