import endpoints from './endpoints';

const headers = {
  'Content-Type': 'application/json'
};

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers,
      body: JSON.stringify(data)
    });
  return await response.json();
}

async function fetchData(url = '') {
  const response = await fetch(url, {
    method: 'GET',
    headers
  });
  return await response.json();
}

async function fetchPeople() {
  const { people } = await fetchData(endpoints.people.getPeople);
  return people;
}

async function postPerson(payload) {
  const person = await postData(endpoints.people.createPerson, payload);
  return person;
}

async function fetchExpenses() {
  const { expenses } = await fetchData(endpoints.expenses.getExpenses);
  return expenses;
}

async function postExpense(payload) {
  const expense = await postData(endpoints.expenses.createExpense, payload);
  return expense;
}

export { postExpense, fetchPeople, fetchExpenses, postPerson };