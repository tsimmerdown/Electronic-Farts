import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Helmet from "react-helmet"
import Seo from "../SEO"

describe("SEO component", () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: `Electronic-Farts`,
          description: `A clone of the Electronic Arts website.`,
        },
      },
    })
  })

  it("renders the tests correctly", () => {
    const mockTitle = "Home | Electronic-Farts"
    const mockDescription = "A clone of the Electronic Arts website."

    render(<Seo title="Home" />)
    const { title, metaTags } = Helmet.peek()

    expect(title).toBe(mockTitle)
    expect(metaTags[0].content).toBe(mockDescription)
    expect(metaTags.length).toBe(8)
  })
})
