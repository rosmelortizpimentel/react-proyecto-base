export const get = async (url) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  };

  const resp = await fetch(url, {
    method: 'GET',
    headers,
  }).catch(() => {});

  const { data } = await resp.json();
  return data.results;
};
