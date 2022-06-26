import { render,screen } from "@testing-library/react";
import Heading from '../Components/Heading/Heading';

describe("Heading component" , () => {
    it("Heading should be H1",() => {
        render(<Heading/>);
        const headingElement = screen.getByRole('heading',{ level : 1});
        expect(headingElement).toBeInTheDocument();
    })
    it("Heading should have content",() => {
        render(<Heading/>);
        const headingContent = screen.getByRole('heading',{ name : "Hello"});
        expect(headingContent).toBeInTheDocument();
    })
    it("Heading should have classname s-20",() => {
        render(<Heading/>);
        const headingContent = screen.getByRole('heading');
        expect(headingContent).toHaveClass('s-20');
    })
})