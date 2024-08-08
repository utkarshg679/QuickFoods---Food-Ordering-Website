import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

// its showing  ReferenceError: fetch is not defined --> which means it cannot find out what is the fetch method as 
// as it is not defined in the JS DOM environment (which is a VIRTUAL DOM) and it doesnt contain the fetch method definition
// when we run our code , we do it in the Browser DOM environment / Node.js env.. where it is provided to us by the Browser thatswhy it works!!

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render the body component with Search" ,async () => {
    await act(async() => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>)
    )
    
    const searchButton = screen.getByRole("button" , {name: "Search"})
    const searchBox = screen.getByTestId("searchInput")

    fireEvent.change(searchBox , { target : { value : "pizza"}})

    fireEvent.click(searchButton)

    const resCards = screen.getAllByTestId("resCard")

    expect(resCards.length).toBe(3)
}
)

it("should render the body component with the Top Rated Restaurant button",async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )})

        const topRated = screen.getByRole("button" , {name : "Top Rated Restaurants",})

        fireEvent.click(topRated)

        const cards = screen.getAllByTestId("resCard")

        expect(cards.length).toBe(7)
    
})