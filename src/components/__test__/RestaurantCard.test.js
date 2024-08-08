import Restaurant_card from "../Restaurant_card" ;
import MOCK_DATA from "../mocks/resCardmocks.json"
import {screen , render} from "@testing-library/react"
import "@testing-library/jest-dom"

it("Should render the Restaurant Card component with props Data" , () => {
    render(<Restaurant_card resData={MOCK_DATA}/>)

    const name = screen.getByText("Ashoka Family Restaurant")

    expect(name).toBeInTheDocument();
})