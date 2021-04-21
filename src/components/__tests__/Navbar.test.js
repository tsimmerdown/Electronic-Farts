import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Nav1 from "../Navbar/Nav1"
import Nav2 from "../Navbar/Nav2"
import NavButton from "../Navbar/NavButton"

describe("Navbar Component", () => {
  it("matches snapshot Nav1", () => {
    const tree = renderer.create(<Nav1 />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders without crashing", () => {
    const { getByTestId } = render(<Nav2 />)
    expect(getByTestId("title")).toHaveTextContent("Electronic Farts")
  })

  it("matches snapshot Nav2", () => {
    const tree = renderer.create(<Nav2 />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("matches snapshot NavButton", () => {
    const tree = renderer.create(<NavButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly Navbutton", () => {
    const { getByTestId } = render(<NavButton title="Game" />)
    expect(getByTestId("text")).toHaveTextContent("Game")
  })
})
