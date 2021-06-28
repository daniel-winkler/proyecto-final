const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const SERVER_PORT = 8000;

const ROOT_URL = "http://localhost:" + SERVER_PORT;
const REGISTER_URL = ROOT_URL + "/register";
const LOGIN_URL = ROOT_URL + "/api/login_check";
const SHOPS_URL = ROOT_URL + "/shops";
const DETAILS_URL = ROOT_URL + "/shopdetails/";

export { 
    ROOT_URL,
    GOOGLE_API_KEY,
    REGISTER_URL,
    LOGIN_URL,
    SHOPS_URL,
    DETAILS_URL
 }