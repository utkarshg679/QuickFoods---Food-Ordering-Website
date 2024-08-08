import { BrowserRouter } from "react-router-dom"
import RestaurantMenu from "../RestaurantMenu"
import {MOCK_DATA_NAME} from "../mocks/mockResMenuData.json"
import { Provider } from "react-redux";
import { fireEvent, screen , render } from "@testing-library/react"
import appStore from "../../utils/appStore";
import { act } from "react-dom/test-utils"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA_NAME)
        }
    })
})

it("should load restaurant menu component" , async () => {
    await act(async () => {
        render(
            <Provider store={appStore}>
            <BrowserRouter>
                <RestaurantMenu/>
            </BrowserRouter>
            </Provider>
        )
    })

    const accordionHeader = screen.getByText("Recommended (20)")
    fireEvent.click(accordionHeader)

    const foodCards = screen.getAllByTestId("foodCard")

    hasExpectedRequestMetadata(foodCards.length).toBe(20)

})


