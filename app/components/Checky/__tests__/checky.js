import React from "react";
import Checky from "../Checky";

import { fireEvent, render, screen, act } from "@testing-library/react";
import '@testing-library/jest-dom'


describe.only("Checky", () => {
    beforeAll(() => {
        jest.useFakeTimers();
    })

    afterAll(() => {
        jest.useRealTimers()
    })

    it("updates state with delay - act() + mock timers", async () => {
        act(() => {
            render(<Checky />);
        })

        // screen.debug();
        let label = screen.getByLabelText("false");
        expect(label).toBeInTheDocument();

        act(() => {
            fireEvent.click(label);
            jest.advanceTimersByTime(2000);
        })

        // screen.debug()
        expect(screen.getByLabelText("true")).toBeInTheDocument();
    });

    it("updates state with delay - RTL async utils", async () => {
        render(<Checky />);

        let label = await screen.findByLabelText("false")
        expect(label).toBeInTheDocument();

        // screen.debug();

        fireEvent.click(label);

        expect(await screen.findByLabelText("true")).toBeInTheDocument();
        // screen.debug()
    });
});
