import { render , screen} from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom"

describe("Contact Us page" ,  () => {

test("Contact page should load " , () => {

    render(<ContactUs/>)
    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument();

   
})

test("button should load on the Contact page " , () => {

    render(<ContactUs/>)
    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument();

   
})

test("input should load on the Contact page " , () => {

    render(<ContactUs/>)
    const input = screen.getByPlaceholderText("Message")

    expect(input).toBeInTheDocument();

   
})
// "test" can also be written "it"
it("Should return the correct length of the number of inputs in Contact Us" , () => { 
    render(<ContactUs/>)
    const buttons = screen.getAllByRole("button")

    expect(buttons.length).toBe(1);
})})