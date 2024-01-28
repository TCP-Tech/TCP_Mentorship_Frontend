import { base_url } from "./urls";

export const fetchDataFromApi = async (api_endpoint, api_parameter) => {
  const options = {
    method: "GET",
  };
  const res = await fetch(
    `${base_url}${api_endpoint}/`+
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
  const res = await fetch(
    `${base_url}${api_endpoint}`,
    options
  );
  const data = await res.json();
  return data;
};

export const fetchDataFromApiWithResponse = async (
  bodyData,
  api_endpoint,
) => {
  console.log(JSON.stringify(bodyData));
  console.log(`${base_url}${api_endpoint}`)
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
  };
  const res = await fetch(
    `${base_url}${api_endpoint}`,
    options
  );
  const data = await res.json();
  return data;
};