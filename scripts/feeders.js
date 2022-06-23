// Running the script from CMD 
// > mongo db_name mongo-feeder.js


var names = [
    "Dipak",
    "Sham",
    "John",
    "Mitika",
    "Mathias",
    "Anna"
]

var departments = [
    "IT",
    "FINANCE",
    "HR",
    "SUPPORT",
    "ADMIN"
]

var getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1))


var feed = count => {
    while(count > 0){
        var emp = {
            name : names[getRandom(0, names.length-1)],
            department: departments[getRandom(0, departments.length-1)]
        };

        db.roll.insert(emp)
        count--;
    }
}

feed(1000);
