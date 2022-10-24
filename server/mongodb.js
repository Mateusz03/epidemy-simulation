const { MongoClient, ObjectId } = require("mongodb");

const host = "mongodb://localhost:27017";
const db = "simulation";
const coll = "simulation";

exports.Insert = async (obj) => {
  const client = new MongoClient(host);
  try {
    const database = client.db(db);
    const simulation = database.collection(coll);
    const doc = { obj };
    await simulation.insertOne(doc);
  } finally {
    await client.close();
    return;
  }
};
exports.Select = async () => {
  const client = new MongoClient(host);
  let val;

  try {
    const database = client.db(db);
    const collection = database.collection(coll);
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
  const client = new MongoClient(host);
  try {
    const database = client.db(db);
    const collection = database.collection(coll);

    await collection.deleteOne({ _id: ObjectId(id) });
  } finally {
    client.close();
    return;
  }
};
exports.Update = async (val) => {
  const client = new MongoClient(host);
  try {
    const database = client.db(db);
    const collection = database.collection(coll);
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
