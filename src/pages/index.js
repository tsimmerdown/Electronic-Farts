import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
//import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import GameGrid from "../components/GameGrid/GameGrid"

const Content = styled.div``

const Text = styled.div`
  font-size: 45px;
  font-weight: 600;
  text-align: center;
  margin: 35px 0;
`
const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}

    <StaticImage
      src="../assets/images/football.jpg"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Football"
      style={{ width: "100%", height: "55vh" }}
      imgStyle={{
        width: "100%",
        height: "100%",
      }}
    />
    <Content>
      <Text>Latest Games</Text>
      <GameGrid />
    </Content>
  </Layout>
)

export default IndexPage
