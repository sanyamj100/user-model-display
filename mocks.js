export const mockFetchUsersData = jest.fn(() => {
  return Promise.resolve([
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      subscription: { plan: "Premium" },
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Doe",
      email: "jane.doe@example.com",
      subscription: { plan: "Basic" },
    },
    {
      id: 3,
      first_name: "Bob",
      last_name: "Smith",
      email: "bob.smith@example.com",
      subscription: { plan: "Premium" },
    },
  ]);
});
