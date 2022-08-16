import axios from "axios";

const BASE_URL = "http://localhost:5002/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTRmYjM2ZTU1YjAxY2VhNWM0YTE5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTE3Mzc2MywiZXhwIjoxNjU5NDMyOTYzfQ.hh1WiTpF5n-ZVlWiLK8PiZsteYHzhEdlHi2jT-o_IYU"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
