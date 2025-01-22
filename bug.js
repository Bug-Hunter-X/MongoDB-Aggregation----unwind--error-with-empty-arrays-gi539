```javascript
// Assuming you have a MongoDB collection named 'myCollection'

db.myCollection.aggregate([
  {
    $lookup: {
      from: 'anotherCollection', // The collection to join with
      localField: 'foreignKey', // The field in 'myCollection'
      foreignField: '_id', // The field in 'anotherCollection'
      as: 'joinedData' // The array field to store the results
    }
  },
  {
    $unwind: '$joinedData' // This line can cause errors if 'joinedData' is empty
  }
])
```