import React from "react"
import styled from "styled-components"
import { FaRegUser } from "react-icons/fa"
import { AiOutlineQuestion } from "react-icons/ai"
const Cont = styled.div`
  width: 100%;
  background: rgb(22, 22, 22);
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: rgba(243, 243, 243, 0.7);
`

const Profile = styled(FaRegUser)`
  font-size: 18px;
  margin-right: 30px;

  &:hover {
    color: rgba(243, 243, 243);
  }
`

const Help = styled(AiOutlineQuestion)`
  font-size: 22px;
  margin-right: 30px;
  &:hover {
    color: rgba(243, 243, 243);
  }
`
const Logo = styled.div`
  font-family: EA Logo;
  font-size: 20px;
  margin-right: 45px;
  color: rgba(243, 243, 243, 0.4);
  &:hover {
    color: rgba(243, 243, 243, 0.7);
  }
`

const Nav1 = () => {
  return (
    <Cont>
      <Profile />
      <Help />
      <Logo>EA</Logo>
    </Cont>
  )
}

export default Nav1
