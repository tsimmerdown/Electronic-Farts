import React, { useEffect, useState } from "react"
import styled from "styled-components"
import GameContainer from "./GameContainer"
import { motion } from "framer-motion"
import { responsive } from "../../data/responsive"

import { getGames } from "./getGames.js"

const Cont = styled.div`
  padding: 0 calc((100vw - 1120px) / 2);
`
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 56px;
`

const Button = styled(motion.div)`
  font-size: 16px;
  padding: 12px 24px;
  text-align: center;
  color: rgb(22, 22, 22);
  border: 2px solid black;
  min-width: 136px;
  width: 180px;
  margin: auto;
  margin-bottom: 56px;

  @media only screen and (max-width: ${responsive.mobile}px) {
    width: 90%;
  }
`

const GameGrid = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const retrieveGames = async () => {
      await getGames().then(data => setGames(data))
    }
    retrieveGames()
  }, [])

  return (
    <Cont>
      <Grid data-testid="grid">
        {games.map(data => {
          return (
            <GameContainer
              key={data.game.id}
              name={data.game.name}
              website={data.game?.url}
              imageID={data.game.cover?.image_id}
            />
          )
        })}
      </Grid>
      <Button
        whileHover={{
          scale: 1.02,
        }}
        data-testid="button"
        onClick={() => {
          console.log(process.env.DB_CLIENT_ID)
        }}
      >
        View All Games
      </Button>
    </Cont>
  )
}

export default GameGrid
