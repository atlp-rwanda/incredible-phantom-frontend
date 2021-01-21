import { handlers } from "../../__apiMocks__/assignHandlers";
import React from "react";
import { setupServer } from "msw/node";
import { fireEvent, waitFor } from "@testing-library/react";
import RenderWithRedux from "../../shared/renderWithRedux";
import AssignDriver from "../../../components/AssignBusToDriver/assignDriver";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("Assign Driver", () => {
  it("It should render the get all drivers", async () => {
    const { getByTestId } = RenderWithRedux(<AssignDriver />);
    expect(getByTestId("assignTable")).toBeInTheDocument();
  });
  it("It should render the driver data from the API", async () => {
    localStorage.setItem("authToken", "token");
    const { getByTestId } = RenderWithRedux(<AssignDriver />, {
      getDriverReducer: {
        data: [
          {
            firstName: "hey",
            lastName: "hello",
            email: "hello@hello.hello",
            plateNo: "RAB200",
            role: "operator",
            phone: "089898989",
            nationalId: 13131313131313131313,
          },
        ],
      },
    });
    await waitFor(() => {
      expect(getByTestId("assignData")).toBeInTheDocument();
    });
  });
  it("It should render the assign Modal", async () => {
    localStorage.setItem("authToken", "token");
    const { getByText, getByTestId, getAllByTestId } = RenderWithRedux(
      <AssignDriver />,
      {
        getDriverReducer: {
          data: [
            {
              firstName: "hey",
              lastName: "hello",
              email: "hello@hello.hello",
              plateNo: "RAB222",
              role: "operator",
              phone: "089898989",
              nationalId: 13131313131313131313,
            },
          ],
        },
      }
    );
    await waitFor(() => {
      fireEvent.click(getAllByTestId("assignData")[0]);
      expect(getByText("PlateNo")).toBeInTheDocument();
      expect(getByTestId("selectmenu")).toBeInTheDocument();
      fireEvent.click(getByTestId("closeModal"));
    });
  });
  it("It should assign a driver", async () => {
    localStorage.setItem("authToken", "token");
    const { getByText, getByTestId, getAllByTestId } = RenderWithRedux(
      <AssignDriver />,
      {
        getDriverReducer: {
          data: [
            {
              firstName: "hey",
              lastName: "hello",
              email: "hello@hello.hello",
              plateNo: "RAB222",
              role: "operator",
              phone: "089898989",
              nationalId: 13131313131313131313,
            },
          ],
        },
      }
    );
    await waitFor(() => {
      fireEvent.click(getAllByTestId("assignData")[0]);
      fireEvent.change(getByTestId("selectmenu"), {
        target: {
          value: "RAB200",
        },
      });
      fireEvent.click(getByTestId("assignButton"));
    });
  });

  it("It should unassign a driver", async () => {
    localStorage.setItem("authToken", "token");
    const { getByText, getByTestId, getAllByTestId } = RenderWithRedux(
      <AssignDriver />,
      {
        getDriverReducer: {
          data: [
            {
              firstName: "hey",
              lastName: "hello",
              email: "hello@hello.hello",
              plateNo: "RAB200",
              role: "operator",
              phone: "089898989",
              nationalId: 13131313131313131313,
            },
          ],
        },
      }
    );
    await waitFor(() => {
      fireEvent.click(getAllByTestId("assignData")[0]);
      fireEvent.click(getByTestId("unassignButton"));
    });
  });
});
