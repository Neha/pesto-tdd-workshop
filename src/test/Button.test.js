import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Components/Button/Button';

test('renders Button component', () => {
    render(<Button />);
})

test('should have label Refresh', () => {
    render(<Button />);
    const buttonLabel = screen.getByRole('button',{ name: 'Refresh'});
    expect(buttonLabel).toBeInTheDocument();
})

test('should have type submit', () => {
    render(<Button />);
    const buttonLabel = screen.getByRole('button',{ name: 'Refresh'});
    expect(buttonLabel).toHaveAttribute('type','submit');
})

test('should have click event', () => {
    const handleClick = jest.fn();
    render(<Button click={handleClick}/>);
    const buttonLabel = screen.getByRole('button',{ name: 'Refresh'});
    fireEvent.click(buttonLabel);
    expect(handleClick).toHaveBeenCalledTimes(1);
})
test('Should match snapshot', () => {
    const handleClick = jest.fn();
    const {container} = render(<Button click={handleClick}/>);
    expect(container).toMatchSnapshot()
  });
