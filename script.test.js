import { fetchAndPopulateUsers } from "./script";

describe("fetchAndPopulateUsers", () => {
  let mockTableBodyData;
  beforeEach(() => {
    mockTableBodyData = document.createElement("tbody");
    mockTableBodyData.setAttribute("id", "users-table");
  });

  it("fetches users data and populates the table", async () => {
    const mockResponse = [
      {
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        subscription: { plan: "Premium" },
      },
      {
        first_name: "Jane",
        last_name: "Doe",
        email: "jane.doe@example.com",
        subscription: { plan: "Basic" },
      },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    await fetchAndPopulateUsers(mockTableBodyData);

    const tableRows = mockTableBodyData.getElementsByTagName("tr");
    expect(tableRows.length).toBe(mockResponse.length);

    for (let i = 0; i < mockResponse.length; i++) {
      const user = mockResponse[i];
      const row = tableRows[i];
      expect(row.children[1].textContent).toBe(user.first_name);
      expect(row.children[2].textContent).toBe(user.last_name);
      expect(row.children[3].textContent).toBe(user.email);
      expect(row.children[4].textContent).toBe(user.subscription.plan);
    }

    global.fetch.mockClear();
  });
});
