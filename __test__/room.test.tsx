import Room, { RoomProps } from "@/components/room";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

describe("Room", () => {
  describe("Not explored", () => {
    // No data is displayed
    // `not-explored` class is included
    test("no data is displayed", () => {
      const roomProps: RoomProps = {
        explored: false,
        items: 0,
        malfunctioning: false,
        onFire: false,
        title: "Loading bay",
      };

      render(<Room {...roomProps} />);

      const wrapperElement = screen.getByTestId("wrapper-unexplored");

      expect(wrapperElement).toBeDefined();
      expect(wrapperElement.childNodes.length).toBe(0);
      expect(wrapperElement.innerHTML).toBe("");

      expect(wrapperElement.classList.contains("bg-room-unexplored")).toBeTruthy();
    });
  });

  describe("Explored", () => {
    describe("Data showing", () => {
      const defaultRoomProps: RoomProps = {
        explored: true,
        items: 0,
        malfunctioning: false,
        onFire: false,
        title: "Loading bay",
      };

      afterEach(() => cleanup());

      test("name is correct and displayed", () => {
        render(<Room {...defaultRoomProps} />);

        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(defaultRoomProps.title);
      });

      // Fire class applied
      // Showing fire indicator
      test("fire indicators", () => {
        render(<Room {...defaultRoomProps} onFire={true} />);

        const wrapperElement = screen.getByTestId("wrapper-explored");

        expect(wrapperElement.classList.contains("bg-room-onFire")).toBeTruthy();
        expect(screen.getByTestId("fire-indicator")).not.toBeNull();
      });

      // Showing malfunction indicator
      test("malfunctioning indicator showing", () => {
        render(<Room {...defaultRoomProps} malfunctioning={true} />);

        expect(screen.getByTestId("malfunctioning-indicator")).not.toBeNull();
      });

      test.skip("number of items is correct", () => {});

      test.skip("computer availability is correct", () => {});

      test.skip("occupants", () => {});
    });

    describe.skip("Functionality", () => {
      test("cannot use room action or computer if malufunctioning", () => {});
    });
  });
});
