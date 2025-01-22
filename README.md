# MongoDB Aggregation: Handling Empty Arrays in `$unwind`

This repository demonstrates a common error encountered when using the `$unwind` operator in MongoDB aggregation pipelines: errors arising from attempting to unwind an empty array.  The `$unwind` operator expects an array; if it receives an empty array, it throws an error. This often occurs during `$lookup` operations when a join returns no matching documents.

The `bug.js` file shows the erroneous code, while `bugSolution.js` presents a corrected approach using `$ifNull` and `$unwind` to gracefully handle empty arrays.