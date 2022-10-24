import axios from "axios";

const updateSimulation = async (params) => {
  axios
    .post("http://localhost:3001/update", { body: params })
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      console.log(error.message);
    });
};
export default updateSimulation;
