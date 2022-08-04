import { render, screen } from "@testing-library/react";
import DinoListItem from "./DinoListItem";

describe("DinoListItem tests", () => {
  it("Displays name and type", () => {
    render(<DinoListItem name='Tyrannosaurus Rex' type='carnivore' />);

    //  expect(screen.getByRole("listitem")).toHaveTextContent("OPPPS");
    expect(screen.getByRole("listitem")).toHaveTextContent("Tyrannosaurus Rex");
    expect(screen.getByRole("listitem")).toHaveTextContent("carnivore");
  });
  it("Displays image if herbivore", () => {
    render(<DinoListItem name='Triceratops' type='herbivore' />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("Does not display image if carnivore", () => {
    render(<DinoListItem name='Triceratops' type='carnivore' />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
