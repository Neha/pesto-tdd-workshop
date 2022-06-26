import { render ,screen,fireEvent } from '@testing-library/react';
import HideContent from '../Components/HideContent/HideContent';

it.skip('should hide class', () => {
    render(<HideContent /> );
    const container = screen.getByTestId('container');
    const btn = screen.getByRole('button');
    fireEvent.click(btn)
    expect(container).toBeVisible()
})