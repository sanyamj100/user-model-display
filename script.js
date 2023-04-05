const USERS_API_URL = "https://random-data-api.com/api/v2/users?size=15";

export async function fetchAndPopulateUsers(tableBodyData) {
  const users = await fetchUsersData();
  const tableBody = document.getElementById("users-table");
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const row = `
      <tr class="${i % 2 === 0 ? "bg-gray-200" : "bg-white"}">
        <td class="px-4 py-2">${i + 1}</td>
        <td class="px-4 py-2">${user.first_name}</td>
        <td class="px-4 py-2">${user.last_name}</td>
        <td class="px-4 py-2">${user.email}</td>
        <td class="px-4 py-2">${user.subscription.plan}</td>
      </tr>
    `;
    tableBody.insertAdjacentHTML("beforeend", row);
  }
}

async function fetchUsersData() {
  const response = await fetch(USERS_API_URL);
  const data = await response.json();
  return data;
}

document.addEventListener("DOMContentLoaded", () => {
  const tableBodyData = document.getElementById("users-table");
  fetchAndPopulateUsers(tableBodyData);
});
