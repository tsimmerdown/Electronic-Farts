import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BsThreeDotsVertical } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavbarData } from "../../data/NavbarData"
import NavButton from "./NavButton"
import { Drawer } from "@material-ui/core"
import { useMediaQuery } from "react-responsive"
import { GrClose } from "react-icons/gr"
import { responsive } from "../../data/responsive"

const Cont = styled.div`
  width: 100%;
  background: #fff;
  height: 56px;
  display: flex;
  align-items: center;
  padding-left: 15px;
`

const Title = styled(Link)`
  color: red;
  text-decoration: none;
  font-size: 27px;
  font-weight: 600;
  margin-left: 15px;
`
const Dots = styled(BsThreeDotsVertical)`
  &:hover {
    transform: scale(1.4);
    color: red;
  }
  transition: all 0.3s ease-in-out;
`

const BurgerCont = styled.div`
  position: absolute;
  right: 0;
  transform: translate(-100%, 0);
  display: ${props => (props.isBigScreen ? "none" : "block")};
`

const BurgerIcon = styled(GiHamburgerMenu)`
  font-size: 25px;
  &:hover {
    color: red;
  }
`
const DrawerCont = styled(Drawer)`
  && {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
`
const Header = styled.div`
  margin: 20px 0 0 20px;
  height: 56px;
`
const Close = styled(GrClose)`
  position: absolute;
  right: 0;
  transform: translate(-20px, 50%);
  &:hover {
    color: red;
  }
`
const Nav2 = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const isBigScreen = useMediaQuery({
    query: `(min-width: ${responsive.tablet}px)`,
  })

  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <Cont>
      <Dots
        style={{ fontSize: "24px" }}
        whileHover={{
          scale: 1.1,
        }}
        onClick={() => {
          console.log(isBigScreen)
        }}
      />
      <Title to="/" data-testid="title">
        Electronic Farts
      </Title>
      {!isBigScreen ? (
        <>
          <BurgerCont isBigScreen={isBigScreen}>
            <BurgerIcon onClick={handleDrawerOpen} />
          </BurgerCont>
          <DrawerCont anchor="top" open={openDrawer}>
            <Header>
              <Title to="/" data-testid="title">
                Electronic Farts
              </Title>
              <Close onClick={handleDrawerOpen} />
            </Header>
            <div style={{ padding: "21px 0 56px 0" }}>
              {NavbarData.map((item, key) => {
                return (
                  <NavButton
                    data-testid="button"
                    title={item.title}
                    key={key}
                  />
                )
              })}
            </div>
          </DrawerCont>
        </>
      ) : (
        NavbarData.map((item, key) => {
          return <NavButton title={item.title} list={item.sub} key={key} />
        })
      )}
    </Cont>
  )
}

export default Nav2
