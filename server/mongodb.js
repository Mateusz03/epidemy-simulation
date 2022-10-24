const { MongoClient, ObjectId } = require("mongodb");

exports.Insert = async (obj) => {
  const client = new MongoClient("mongodb://localhost:27017");
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
  const client = new MongoClient("mongodb://localhost:27017");
  let val;

  try {
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
  } finally {
    await client.close();
    return val;
  }
};
exports.Delete = async (id) => {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    const database = client.db("simulation");
    const collection = database.collection("simulation");

    await collection.deleteOne({ _id: ObjectId(id) });
  } finally {
    client.close();
    return;
  }
};
exports.Update = async (val) => {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    const database = client.db("simulation");
    const collection = database.collection("simulation");
    await collection.updateOne(
      { _id: ObjectId(val.id) },
      {
        $set: {
          obj: {
            simulationName: val.obj.simulationName,
            simulationParameters: val.obj.simulationParameters,
            data: val.obj.data,
          },
        },
      },
    );
  } finally {
    client.close();
    return;
  }
};
