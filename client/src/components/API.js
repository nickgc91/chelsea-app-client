const baseUrl = "http://localhost:3000";
const signInUrl = baseUrl + "/signIn";

const post = (url, data) =>  
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data })
  }).then(resp => resp.json())

const signIn = user => post(signInUrl, user)

export default { signIn }