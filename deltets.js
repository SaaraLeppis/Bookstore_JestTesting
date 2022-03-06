const listA = [1, 2, 3]
const listB = [1, 2, 3]
if (listA == listB) {


    console.log("sama");
}

const testData = [
    {
        "id": 1,
        "name": "Hacking databases",
        "author": "",
        "topics": ["some", "home"],
        "price": 30,
        "extras": []
    },
    {
        "id": 2,
        "name": "Hack also databases",
        "author": "sa",
        "topics": [],
        "price": 30,
        "extras": []
    }
];
/* for (let some of testData) {
    if (!some.author) {
        throw new Error("hello")
    }
    else {
        console.log(some.author)
    }

} */
const books = require('./datastorage.json');


for (let x of books) {
    if (x.topics.length > 0) {
        console.log(x.topics);
    }
    else {
        console.log(x.id, ":", x.topics.length);
    }
}