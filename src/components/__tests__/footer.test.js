import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Footer from "../Footer/Footer"

describe("Footer Component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Footer />)
    expect(getByTestId("footer-links")).toHaveTextContent("Game Library")
  })

  it("matches snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
