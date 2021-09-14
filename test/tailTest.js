const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([1, 2, 3, 4]).length, 3);
assertEqual(tail([1, 2, 3, 4])[0], 2);
assertEqual(tail([1, 2, 3, 4])[1], 3);
assertEqual(tail([1, 2, 3, 4])[2], 4);

assertEqual(tail(["Hannah"]).length, 0);
assertEqual(tail(["Hannah"])[0], undefined);


assertEqual(tail([]).length, 0);
assertEqual(tail([])[0], undefined);