import React from "react";
import { render, screen, act } from "@testing-library/react";
import '@testing-library/jest-dom'

import Fetchy from "../Fetchy";

describe("Fetchy", () => {
    beforeAll(() => {
        jest.useFakeTimers();
    })

    afterAll(() => {
        jest.useRealTimers()
    })

    it("shows Loading and Data - mock timers", async () => {
        act(() => {
            render(<Fetchy />);
        });

        // screen.debug();
        expect(screen.getByText("Loading")).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(3000);
        });

        // screen.debug();
        expect(screen.getByText("Data:")).toBeInTheDocument();
    });

    it("shows Loading and Data", async () => {
        render(<Fetchy />);

        expect(await screen.findByText("Loading")).toBeInTheDocument();
        // screen.debug();

        expect(await screen.findByText("Data:")).toBeInTheDocument();
        // screen.debug();
    });
});
