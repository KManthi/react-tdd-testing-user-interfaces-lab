import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I\'m _______`", () => {
    render(<App/>);
    const topLevelHeading = screen.getByRole('heading', {
        name: /hi, i\'m/i,
        exact: false,
        level: 1,
    });
    expect(topLevelHeading).toBeInTheDocument();
})

test('displays an image of yourself', () => {
    render(<App/>);
    const image = screen.getByAltText('My profile picture');
    expect(image).toHaveAttribute('src', 'http://umich.edu/~chemh215/W11HTML/SSG5/ssg5.2/FRex.png');
});
test('displays a second-level heading with the text `About Me`', () => {
    render(<App/>);
    const secondLevelHeading = screen.getByRole('heading', {
        name: /about me/i,
        exact: false,
        level: 2,
    });
    expect(secondLevelHeading).toBeInTheDocument();
});
test('displays a paragraph for your biography', () => {
    render(<App/>);
    const paragraph = screen.getByText(/lorem ipsum/i);
    expect(paragraph).toBeInTheDocument();
});
test('displays links to github and linkedin', () => {
    render(<App/>);
    const githubLink = screen.getByRole('link', {
        name: /github/i,
    });
    const linkedinLink = screen.getByRole('link', {
        name: /linkedin/i,
    });
    expect(githubLink).toHaveAttribute(
        'href',
        expect.stringContaining('https://github.com')
    );
    expect(linkedinLink).toHaveAttribute(
        'href',
        expect.stringContaining('https://linkedin.com')
    );
});
