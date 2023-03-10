import { API_BASE_URL } from "../constants.mjs";

const loginURL = `${API_BASE_URL}auth/login`;

export async function login(payload) {
  const options = makeOptions("POST", payload);
  const response = await fetch(loginURL, options);
  const result = await response.json();

  if (response.ok) {
    return result;
  }

  const errorText = result.errors[0].message
    ? result.errors[0].message
    : "Log in error";
  throw new Error(errorText);
}

function makeOptions(method, payload) {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
}
