import React, { useState } from "react"
import styled from "styled-components"
import { Popover, Divider } from "@material-ui/core"

const Cont = styled.div`
  background: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 34px;
`
const ListText = styled.div`
  height: 30px;
  font-size: 15px;
  color: rgba(22, 22, 22, 0.6);
  &:hover {
    color: red;
  }
`
const Text = styled.div`
  &:hover {
    color: red;
  }
`

const NavButton = ({ title, list }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <>
      {list ? (
        <Cont onMouseEnter={handleClick} onMouseLeave={handleClose}>
          <Text data-testid="text" style={{ fontSize: "18px" }}>
            {title}
          </Text>
          <Popover
            style={{ pointerEvents: "none" }}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            disableRestoreFocus
          >
            <div
              style={{ pointerEvents: "auto", padding: "20px  35px 10px 35px" }}
            >
              {list.map((item, key) => {
                return <ListText key={key}>{item}</ListText>
              })}
            </div>
          </Popover>
        </Cont>
      ) : (
        <div>
          <Divider style={{ margin: "0 24px" }} />
          <Text
            style={{ fontSize: "18px", padding: "18px 0", margin: "0 24px" }}
            data-testid="text"
          >
            {title}
          </Text>
        </div>
      )}
    </>
  )
}

export default NavButton
