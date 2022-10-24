import axios from "axios";

const addSimulation = async (value) => {
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
      window.location.reload();
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default addSimulation;
