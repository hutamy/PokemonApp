import { render, fireEvent, waitFor } from "@testing-library/react"
import App from "./App"

describe('Testing app component', () => {
  test('Should render app correctly', () => {
    const { getByText } = render(<App/>)
    const title = getByText('Pokemon')
    expect(title).toBeInTheDocument()
  })

  test('Should link to my pokemon list page', () => {
    const { getByTestId } = render(<App/>)
    const linkToMyPokemon = getByTestId("navbar-my-pokemon")

    waitFor(() => {
      fireEvent.click(linkToMyPokemon)
      const myPokemon = getByTestId("my-pokemon-page")
      expect(myPokemon).toBeInTheDocument()
    })
  })
})