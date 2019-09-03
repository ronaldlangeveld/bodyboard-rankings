import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import TopRiders from "../components/topriders";
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Contribute from '../components/contribute';

const IndexPage = () => {

  const bgImg = {
    // Defaults are overwrite-able by setting one or each of the following:
    backgroundSize: 'cover',
    position: 'relative',
    backgroundAttachment: 'fixed',
    height: '100%',
    width: '100%',
    overflow: 'hidden'

  }

  const data = useStaticQuery(graphql`
  query {
    background: file(relativePath: { eq: "background.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  const bg = data.background.childImageSharp.fluid;
  console.log(bg)

return (
  <Layout>
    <SEO title="Bodyboarding World Rankings" />
    <BackgroundImage
        style={bgImg}
        Tag="header"
        className="masthead"
        fluid={bg}
        backgroundColor={`#040e18`}>

    <Header />
    <TopRiders />
    <Contribute />

    </BackgroundImage>


  </Layout>

)
}

export default IndexPage
