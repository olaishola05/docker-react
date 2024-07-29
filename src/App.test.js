import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Should renders Something random with some degrees of randomness", () => {
  render(<App />);
  const pElemnt = screen.getByText(/Something random with some degrees of randomness/i);
  expect(pElemnt).toBeInTheDocument()
})

test("renders without crashing", () => {
  const div = document.createElement('div');
  render(<App />, div)
  expect(div).toBeEmptyDOMElement()
})


