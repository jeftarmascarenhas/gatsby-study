import React from "react"
import Layout from '../components/layout'


const HomePage = ({ data }) => <Layout>
{console.log(data)}
  <h2>{data.site.siteMetadata.title}</h2>
  <p>What a world.</p>
  <img src="https://source.unsplash.com/random/400x200"  alt=""/>
</Layout>


export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`


export default HomePage