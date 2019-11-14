var user = {  //Create a null object and set its variable name as user;
    name: "John",  //Add a name attribute and set its value as John;
    surname: "Mike"  //Add a surname attribute and set its value as Mike;
};
console.log(user);  //for debugging use
user.name = "Peter"; //Modify the value of name attribute as Peter;
console.log(user);  //for debugging use
delete user.name; //Delete name attribute of user.
console.log(user);  //for debugging use
