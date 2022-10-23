const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");
exports.Insert = async (obj) => {
  try {
    const database = client.db("simulation");
    const simulation = database.collection("simulation");
    const doc = { obj };
    await simulation.insertOne(doc);
  } finally {
    await client.close();
    return;
  }
};
exports.Select = async () => {
  let val;
  const database = client.db("simulation");
  const collection = database.collection("simulation");
  await collection
    .find({})
    .project({})
    .toArray()
    .then((values) => {
      val = values;
    })
    .catch((err) => {
      console.log(err.Message);
    });
  return val;
};
exports.Delete = async (id) => {
  try {
    const database = client.db("simulation");
    const collection = database.collection("simulation");

    await collection.deleteOne({ _id: ObjectId(id) });
  } finally {
    client.close();
    return id;
  }
};
