import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "./login";

describe("Login Page", () => {
  it("should render with required fields", () => {
    render(<Login />);
    expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "Remember me" })
    ).toBeInTheDocument();
    expect(screen.getByText("Forgot password?")).toBeInTheDocument();
  });
});
