import { base_url } from "./urls";

export const fetchDataFromApi = async (api_endpoint, api_parameter) => {
  const options = {
    method: "GET",
  };
  const res = await fetch(
    `${base_url}${api_endpoint}/` +
      // "/?apikey=" +
      // `${api_key}` +
      // "&orgid=" +
      // `${org_id}` +
      // "&" +
      `${api_parameter}`,
    options
  );

  const data = await res.json();
  return data;
};

export const fetchDataWithEndPoint = async (api_endpoint) => {
  const options = {
    method: "GET",
  };
  const res = await fetch(`${base_url}${api_endpoint}/`, options);
  const data = await res.json();
  return data;
};



const getCookie = (name) => {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
    ?.split('=')[1];
  return cookieValue || null;
};


export const fetchDataFromApiWithResponse = async (bodyData, api_endpoint) => {
  console.log(JSON.stringify(bodyData));
  // console.log(`${base_url}${api_endpoint}/`);
  const csrfToken = getCookie('csrftoken');
  console.log('CSRF Token:', csrfToken);
  const options = {
    method: "POST",
    'X-CSRFToken': csrfToken,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
    credentials: 'include'
  };
  const res = await fetch(`${base_url}${api_endpoint}`, options);
  const data = await res.json();
  return data;
};
