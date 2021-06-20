const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SEARCH_URL = "https://run.mocky.io/v3/298d5b76-d808-4995-8675-7039816d42bd"; // https://9f83c9ab-7ee6-4bbd-879d-36f5754b7816.mock.pstmn.io/
const SHOP_URL = "https://run.mocky.io/v3/87d3cbad-cdb0-4a55-adba-17ed29dfce25"; // https://ae27b9c3-c7f2-4eba-a4b2-4221fea12dd8.mock.pstmn.io/

const SERVER_PORT = 8000;
// const CLIENT_PORT = 3000;

const ROOT_URL = "http://localhost:" + SERVER_PORT;

export { 
    ROOT_URL,
    GOOGLE_API_KEY,
    SEARCH_URL,
    SHOP_URL
 }