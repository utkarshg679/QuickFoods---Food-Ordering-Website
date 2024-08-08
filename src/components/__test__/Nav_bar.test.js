import { Provider } from "react-redux";
import Nav_bar from "../Nav_bar";
import { fireEvent, render , screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"

it("Should render Nav_bar along with login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Nav_bar/>
        </Provider>
        </BrowserRouter>
    )

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument();
        
})

it("Should render Nav_bar along with CART", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Nav_bar/>
        </Provider>
        </BrowserRouter>
    )
// By using a regex (/.../) we can write just a small portion of the component for that testcase to be passed 
// earlier we had to write the whole exact text 
    const cart = screen.getByText(/Cart/) 


    expect(cart).toBeInTheDocument();
        
})

it("Should render Logout button on click on login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Nav_bar/>
        </Provider>
        </BrowserRouter>
    )
    const loginbutton = screen.getByRole("button" , {name: "Login"})

    fireEvent.click(loginbutton)
    
    const logoutbutton = screen.getByRole("button" , {name: "Logout"})

    expect(logoutbutton).toBeInTheDocument();
        
})

