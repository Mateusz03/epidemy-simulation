import axios from "axios";

const loadSimulation = async () => {
  let res;
  await axios
    .post(
      "http://localhost:3001/loadSimulation",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    )
    .then((response) => {
      res = response.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return res;
};
export default loadSimulation;
