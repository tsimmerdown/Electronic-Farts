import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import GameGrid from "../components/GameGrid/GameGrid"
import SEO from "../components/SEO"

const Text = styled.div`
  font-size: 45px;
  font-weight: 600;
  text-align: center;
  margin: 35px 0;
`
const IndexPage = () => (
  <Layout>
    <SEO />
    <StaticImage
      src="../assets/images/footballs.jpg"
      quality={95}
      alt="Football"
      placeholder="blurred"
      style={{ width: "100%", height: "55vh" }}
      imgStyle={{
        width: "100%",
        height: "100%",
      }}
    />
    <div>
      <Text>Latest Games</Text>
      <GameGrid />
    </div>
  </Layout>
)

export default IndexPage
