import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Docker/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Docker Course", () => {
  render(<App />);
  const linkElement = screen.getByText(/Docker Course/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Docker Course 2", () => {
  render(<App />);
  const linkElement = screen.getByText(/Docker Course/i);
  expect(linkElement).toBeInTheDocument();
});
