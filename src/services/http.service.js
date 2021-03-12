import axios from "axios";
const API_KEY = "ec9f89e4efe3473d6c48f999555798c9";

export const getUserLocality = (position) =>
  axios.get(
    `http://api.positionstack.com/v1/reverse?access_key=${API_KEY}&query=${position.lat},${position.lng}`
  );

export const getDoctorsPosition = (userLocality) =>
  axios.get(
    `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=medical&region=${userLocality}&limit=20`
  );
