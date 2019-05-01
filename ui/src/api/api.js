
const url = `http://localhost:3001/api`

export const API = {
    userTransactions: {
      async getUsersTransactions() {
        const response = await fetch(`${url}/users/transactions`);
        const data = await response.json();
        return data;
      }
    }
}