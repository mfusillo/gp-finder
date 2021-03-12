import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getUserLocality = (position) =>
  axios.get(
    `http://api.positionstack.com/v1/reverse?access_key=${API_KEY}&query=${position.lat},${position.lng}`
  );

export const getDoctorsPosition = (userLocality) =>
  axios.get(
    `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=medical&region=${userLocality}&limit=20`
  );
