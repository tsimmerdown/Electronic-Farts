import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import GameContainer from "./GameContainer"
import { motion } from "framer-motion"
import { responsive } from "../../data/responsive"

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
    const getGames = async () => {
      const res = await axios({
        method: "post",
        url:
          "https://cryptic-spire-51992.herokuapp.com/https://api.igdb.com/v4/release_dates",

        data: `fields *, game.*, game.cover.*; sort date desc; where game.involved_companies.company = 1 & human != "TBD"; limit 100;`,
        headers: {
          Accept: "application/json",
          "Client-ID": "dls4vul9t0c13l3s1nbyrslkc8mca3",
          Authorization: "Bearer 602kzs24a6vxjb04fw3xnv1g9l2ray",
        },
      })

      var dataArr = res.data

      dataArr = dataArr.filter(
        (data, index, self) =>
          index === self.findIndex(t => t.game.name === data.game.name)
      )

      setGames(dataArr)
    }
    getGames()
  }, [])

  return (
    <Cont>
      <Grid>
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
      >
        View All Games
      </Button>
    </Cont>
  )
}

export default GameGrid
