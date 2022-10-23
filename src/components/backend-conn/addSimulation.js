import axios from "axios";

const addSimulation = async (value) => {
  let res;
  await axios
    .post(
      "http://localhost:3001/addSimulation",
      { body: [...value] },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    )
    .then((response) => {
      if (response.status === 200) res = response.statusText;
    })
    .catch((error) => {
      console.log(error.message);
    });
  return res;
};

export default addSimulation;
