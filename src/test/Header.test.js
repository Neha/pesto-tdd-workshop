import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Header from '../Components/Header/Header';

describe("<Header/> component", () => {
  test('should renders Header', () => {
    const message = "Get a Quote";
    render(<Header title={message}/>);
    const headingText = screen.getByRole("heading", { name : message, level: 1})
    expect(headingText).toBeInTheDocument();
  });
  
  it('Should match snapshot', () => {
    const message = "Get a Quote";
    const view = renderer
    .create(<Header title={message}/>)
    .toJSON();
    expect(view).toMatchSnapshot()
  });
  
})
// test('should render red background color for Heading', () => {
//   const message = "Your heading comes here..."
//   render(<Header title={message}/>);
//   const heading = screen.getByTestId('heading');
//   expect(heading).toHaveStyle('background-color: rgb(220, 220, 220); color: rgb(0, 0, 0)');
// })






