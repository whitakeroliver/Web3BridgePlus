// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3BridgePlus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3BridgePlus/i);
    expect(titleElement).toBeInTheDocument();
});
