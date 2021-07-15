const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const SERVER_PORT = 8000;
const ROOT_URL = "http://localhost:" + SERVER_PORT;

const REGISTER_URL = ROOT_URL + "/register";
const LOGIN_URL = ROOT_URL + "/api/login_check";

// APIs
const SHOPS_URL = ROOT_URL + "/shops";
const DETAILS_URL = ROOT_URL + "/shopdetails/"; // + id
const DESTINATIONS_URL = ROOT_URL + "/destinations";
const LANGUAGES_URL = ROOT_URL + "/languages";
const POST_URL = ROOT_URL + "/api/post";
const CHECK_TOKEN_URL = ROOT_URL + "/api/check-token";
const DASHBOARD_URL = ROOT_URL + "/api/dashboard";
const DELETE_URL = ROOT_URL + "/api/delete";
const UPDATE_URL = ROOT_URL + "/api/update";
const ACCOUNT_URL = ROOT_URL + "/api/account";
const CLICKCOUNTER_URL = ROOT_URL + "/clickcounter";

export { 
    GOOGLE_API_KEY,
    REGISTER_URL,
    LOGIN_URL,
    SHOPS_URL,
    DETAILS_URL,
    DESTINATIONS_URL,
    LANGUAGES_URL,
    POST_URL,
    CHECK_TOKEN_URL,
    DASHBOARD_URL,
    DELETE_URL,
    UPDATE_URL,
    ACCOUNT_URL,
    CLICKCOUNTER_URL
 }