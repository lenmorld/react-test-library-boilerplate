import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'

import Fetchy from "../Fetchy";

describe("Fetchy", () => {
    describe('act + mock timers', () => {
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
            // await waitFor(() => screen.getByText('Loading'), { timeout: 3000 })

            act(() => {
                jest.advanceTimersByTime(3000);
            });

            // screen.debug();
            expect(screen.getByText("Data:")).toBeInTheDocument();
        });
    })

    describe('async utils', () => {
        it("shows Loading and Data", async () => {
            render(<Fetchy />);

            // expect(await screen.findByText("Loading")).toBeInTheDocument();
            expect(await screen.findByText("Loading", {}, { timeout: 3000 })).toBeInTheDocument();
            // screen.debug();

            // expect(await screen.findByText("Data:")).toBeInTheDocument();
            expect(await screen.findByText("Data:", {}, { timeout: 3000 })).toBeInTheDocument();
            // screen.debug();
        });
    });
});
