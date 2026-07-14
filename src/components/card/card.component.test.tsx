import { render, screen } from '@testing-library/react';
import Card from './card.component';
describe('Card component', () => {
    test('should render correctly', () => {
        const monster = {
            id: '1',
            name: 'Monster 1',
            email: 'sample@mail.com'
        };
        render(<Card monster={monster} />);
        const nameElement = screen.getByText(/Monster 1/i);
        const emailElement = screen.getByText(/sample@mail.com/i);

        expect(nameElement).toBeInTheDocument();
        expect(emailElement).toBeInTheDocument();
    });
});