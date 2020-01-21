const baseUrl = "http://localhost:3000";
const signInUrl = baseUrl + "/signIn";
const validateUrl = baseUrl + "/validate";
const profileUrl = baseUrl + "/profile";

const get = url =>
  fetch(url, {
    headers: { Authorization: localStorage.getItem("token") }
  }).then(resp => resp.json());

const post = (url, data) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    },
    body: JSON.stringify({ data })
  }).then(resp => resp.json());

const signIn = user => post(signInUrl, user);

const validate = () => get(validateUrl);

const getProfileData = () => get(profileUrl)

window.validate = validate;

export default { signIn, validate, getProfileData };
