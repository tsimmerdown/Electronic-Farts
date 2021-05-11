import React, { useState } from "react"
import styled from "styled-components"
import { Divider } from "@material-ui/core"
import { motion } from "framer-motion"
import { responsive } from "../../data/responsive"
import { StaticImage } from "gatsby-plugin-image"

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30%;
  height: 35vh;
  margin: 15px;

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: ${responsive.tablet}px) {
    width: 45%;
  }

  @media only screen and (max-width: ${responsive.mobile}px) {
    width: 100%;
    height: 45vh;
  }
`
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Title = styled(motion.div)`
  font-size: 23px;
  text-align: center;
  margin: 20px 0;
`

const HoverCont = styled.div`
  position: absolute;
  backdrop-filter: blur(2px);
  height: 100%;
  width: 100%;
  background: linear-gradient(
    -83deg,
    rgba(255, 71, 71, 0.8),
    rgba(13, 16, 66, 0.8)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`
const Text = styled(motion.div)`
  color: rgb(163, 163, 163);
  font-size: 18px;
  margin: 15px 0 10px;
  &:hover {
    color: white;
  }
`
const Line = styled(motion(Divider))`
  height: 1px;
  width: 25%;
  && {
    background: rgb(163, 163, 163);
  }
`

const GameContainer = ({ name, website, imageID }) => {
  const [hover, setHover] = useState(false)

  const hoverHandler = () => {
    setHover(!hover)
  }
  return (
    <Cont onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
      {imageID ? (
        <Image
          src={`https://images.igdb.com/igdb/image/upload/t_1080p/${imageID}.jpg`}
          alt={name}
        />
      ) : (
        <StaticImage
          src="../../assets/images/noImage.jpg"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="No Image"
          placeholder="blurred"
          // style={{ width: "100%", height: "55vh" }}
          imgStyle={{
            width: "100%",
            height: "100%",
          }}
        />
      )}

      {hover && (
        <HoverCont>
          <Title
            initial={{ y: "10px", opacity: 0 }}
            animate={{
              y: "0",
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            {name}
          </Title>
          <a href={website}>
            <Text>Official Site</Text>
          </a>
          <Line />
          <Text
            initial={{ y: "-20px", opacity: 0 }}
            animate={{
              y: "0",
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            Help
          </Text>
          <Line
            initial={{ y: "-20px", opacity: 0 }}
            animate={{
              y: "0",
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
            }}
          />
          <Text
            initial={{ y: "-40px", opacity: 0 }}
            animate={{
              y: "0",
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            Forums
          </Text>
        </HoverCont>
      )}
    </Cont>
  )
}

export default GameContainer
