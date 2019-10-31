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
  const { people } = await fetchData('http://localhost:8081/api/people');
  return people;
}

async function fetchExpenses() {
  const { expenses } = await fetchData('http://localhost:8081/api/expenses');
  return expenses;
}

async function postPerson(payload) {
  const person = await postData('http://localhost:8081/api/person', payload);
  return person;
}

async function postExpense(payload) {
  const expense = await postData('http://localhost:8081/api/expense', payload);
  return expense;
}

export { postExpense, fetchPeople, fetchExpenses, postPerson };