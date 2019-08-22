import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import SEO from "./seo"

const MenuImageBanner = () => {
  const data = useStaticQuery(graphql`  
  query MenuImageBannerQuery {
    allStrapiMenuphotobanners {
      edges {
        node {
          image1 {
            publicURL
          }
          image2 {
            publicURL
          }
          image3 {
            publicURL
          }
        }
      }
    }
  }`)

  return (
    <>
    <div>
      <img src={data.allStrapiMenuphotobanners.edges[0].node.image1.publicURL} style={{ height: "200px", width: "200px"}} />
      <img src={data.allStrapiMenuphotobanners.edges[0].node.image2.publicURL} style={{ height: "200px", width: "200px"}} />
      <img src={data.allStrapiMenuphotobanners.edges[0].node.image3.publicURL} style={{ height: "200px", width: "200px"}} />
    </div>
    </>
  )
}

export default MenuImageBanner