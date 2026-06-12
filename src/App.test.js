// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockStep title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockStep/i);
    expect(titleElement).toBeInTheDocument();
});
