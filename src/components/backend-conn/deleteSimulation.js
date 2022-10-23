import axios from "axios";

const deleteSimulation = async (val) => {
  let res;
  await axios
    .post("http://localhost:3001/delete", { id: val })
    .then((response) => {
      res = response;
    })
    .catch((error) => {
      console.log(error.message);
    });
  return res;
};
export default deleteSimulation;
