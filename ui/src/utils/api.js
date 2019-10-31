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

async function getData(url = '') {
  const response = await fetch(url, {
    method: 'GET',
    headers
  });
  return await response.json();
}

export { postData, getData };