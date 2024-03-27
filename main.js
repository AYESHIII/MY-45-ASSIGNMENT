"use strict";
// 2 PERSNOL MESSAGE: store a person's name in a veriable and store a message to that person. your message should be simple, sach as, "hello ERIC,would you like to learn some python todoy?"
let hello = "ayesha";
console.log(`hello ${"hello"}, would you like to learn some python today`);
// 3 NAME CASE : store a person name in a veriable and print that person's name in lowcase,uppercase and tittlecase;//
let person_name = "amjad";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
;
console.log(person_name.charAt(0).toUpperCase());
// 4 FOMOUS QUOTE: find a quote from a famous person you admire print the quote and name its aouthor your output something like following,include quotation mark
// TONNY ROBIN ONCE SAID, "setting goals is the first step in turning the invisible into visible"
console.log `("TONNY ROBIN ONCE SAID"),"setting goals is the first step in turning the invisible into visible"`;
// 5 FAMOUS QUOTE 2: repeat exercise 4,but this time store a famous person's name in a veriable called famous_person's.then compose your message and store it in a new veriable called message and print your message/
let famous_person = "TONNY ROBIN";
let quote = "setting goals is the first step in turning the invisible into visible";
console.log(`${famous_person} once said,${"quote"}`);
// 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName = `\n\t  AYESHA \t\n`;
console.log(personName);
let striped = personName.trim();
console.log(striped);
// 7  and 8   Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
//9 FAVOURITE Number : store a favourite number in a veriable then using that veriable create a message that reveal your favourite number and print that message 
let favouritenumber = "10";
console.log(`my favourite number is ${favouritenumber}`);
//10 ADDING COMMENT : choose two of the programs you are written and add atleast one comment to each.if you don't have anything specific to write because your program are too simple at this point just add your name and current date at the top of the each program file then write one sentence to discribing what the program does
// AYESHA 
// 26-FEB-202
// IN THIS PROGRAM print a personal message
let myName = "AYESHA";
console.log(`HELLO ${myName}, would you like to solve some maths problem today `);
// AYESHA 
// 26-FEB-2024
// IN THIS PROGRAM WE WILL WRITE 1-10
console.log(`1 2 3 4 5 6 7 8 9 10`);
// // 11 NAMES store name of a few of your friends in an array called names print each peron's name an accessing each element {t in the list one at a time.
let guest_names = ["dua", "ujala", "neha", "ashna", "maryam", "maham", "amna"];
console.log(guest_names[0]);
console.log(guest_names[1]);
console.log(guest_names[2]);
console.log(guest_names[3]);
console.log(guest_names[4]);
console.log(guest_names[5]);
console.log(guest_names[6]);
// 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
let guest_name = ["dua", "ujala", "neha", "ashna", "maryam", "maham", "amna"];
let message = "are you guys free tomorrow so we can hangout together";
console.log(guest_name[0] + "  " + message);
console.log(guest_name[1] + "  " + message);
console.log(guest_name[2] + "  " + message);
console.log(guest_name[3] + "  " + message);
console.log(guest_name[4] + "  " + message);
console.log(guest_name[5] + "  " + message);
console.log(guest_name[6] + "  " + message);
// 13Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transpotation = ["bike", "car", "bus", "motorcycle", "aeroplane"];
transpotation.map((items) => console.log(`i would to own a ${items}`));
//14 
// uest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guesTArr = [`UJALA`, `DUA`, `NEHA`, `ASHNA`, `SAAD`, `HASAN`];
guesTArr.map((items) => console.log(`you are invited for a dinner tomorrow ${items}`));
// 15
// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
let guestArr = [`UJALA`, `DUA`, `NEHA`, `ASHNA`, `SAAD`, `HASAN`];
let cannotAttend = "ASHNA";
let newGuest = "MAHAM";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
console.log(guestArr);
// 16
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
guestArr.map((items) => console.log(`DEAR ${items}, I found a bigger dinner table so i invited mmore people.`));
// part 2 began 
let guestbeg = "AMNA";
guestArr.unshift(guestbeg);
console.log(guestArr);
// part 3 middle
let middleguest = "FATIMA";
let middleindex = guestArr.length / 3;
guestArr.splice(middleindex, 0, middleguest);
console.log(guestArr);
// part 4 append
guestArr.push("AHMED");
console.log(guestArr);
//  part 5
guestArr.map((items) => console.log(`DEAR ${items} you are invited in the more people category on dinner.`));
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// 
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
let guests = [`ALI`, `BILAL`, `HARRY`, `DAWOOD`, `SAAD`, `HASAN`];
// informing that only two people can be invited 
console.log("due to limited space,only two people can be invited for dinner.");
//   removing guests until only two remain
while (guests.length > 2) {
    const removedguest = guests.pop();
    console.log(`sorry ,${removedguest},you are no longer to be invited to dinner.`);
}
//  printing invitation to the remaining two guests
guests.forEach((guest) => {
    console.log(`DEAR ${guest},you are still invited to the dinner.`);
});
// removing the last two names from the guest list
guests.pop();
guests.pop();
// printing the final list to confirm it is empty
console.log("Final guest list:", guests);
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//  Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// store a local item in an array 
let placetovisit = ["UK", "TURKEY", "KOREA", "PARIS", "AMERICA."];
// print the array in it's original order 
console.log("original order:", placetovisit);
// print the array in alphabetical order without modify the actual list 
console.log("alphabetical order:", [...placetovisit].sort());
// show that the array is stil in it's original order
console.log("original order after sorting :", placetovisit);
// print the array in reverse alphabetical order 
console.log("reverse alphabetical order:", [...placetovisit].sort().reverse());
// show that the array is still in it's original order
console.log("orginal order after reverse sorting:", placetovisit);
// reverse  the order of the list again to get back to the orginal order
placetovisit.reverse();
console.log(" back to the orginal order:", placetovisit);
// sort the array in alphabetical order
placetovisit.sort();
console.log("sorted in aplabetical order:", placetovisit);
// sort the array in reverse alphabetical order 
placetovisit.sort((a, b) => b.localeCompare(a));
console.log("sorted in reverse alphabetical order:", placetovisit);
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner. 
let invitations = ["ALI", "BILAL"];
let count_invitations = invitations.length;
console.log(`${count_invitations} people will come to the dinner.`);
//  20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
let country = [`UK`, `SOUTH KOREA`, `AMEICA`, `TURKEY`, `PARIS`];
console.log(`list of country`);
console.log(country);
let person = { name: "Ayesha", fname: "female", age: 17 };
console.log(person);
// 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
const days = ["sunday", "monday", "tuesday", " wednesday", "thursday", "friday", "saturday",];
// console.log (days{7})
console.log(days[6]);
// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = "subaru";
console.log("is car == `subaru`? predict true");
console.log(car == "subaru");
console.log("is car != `honda city`? predict true");
console.log(car != `honda city`);
console.log("is car == `subaru`? predict false");
console.log(car == "subaru");
console.log("is car == `Subaru`? predict false");
console.log(car == "Subaru");
console.log("is car.length == 6? predict true");
console.log(car.length == 6);
console.log("is car.length == 10? predict true");
console.log(car.length != 10);
console.log("is  10 > 45 ? predict false");
console.log(10 > 45);
console.log("is  3 <= 2 ? predict false");
console.log(3 <= 2);
console.log("is  72 >= 83 ? predict false");
console.log(72 >= 83);
console.log("is car == `Subaru` && car.lenght == 6? predict true");
console.log(car == `Subaru` && car.length == 6);
//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let name_1 = "ayesha";
let name_2 = "ayesha amjad";
let name_3 = "ayesha amjad fazal";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
if (name_1 != name_3) {
    console.log("names are equal");
}
let age_1 = 18;
let age_2 = 22;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_2 !== 22) {
    console.log("eligible for vote in older category");
}
if (age_1 <= age_2) { //les than
    console.log("younger");
}
if (age_1 >= age_2) { //grater than
    console.log("older");
}
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 || age_2 != 22) {
    console.log("person is not eligible for vote");
}
let countries = ["UK", "TURKEY", "KOREA", "AMERICA."];
if (countries.includes("PAKISTAN")) {
    console.log("PAKISTAN is in countries list");
}
if (countries.includes("AMERICA")) {
    console.log("AMERICA is not include in an array ");
}
//25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
let alienColors = "green";
if (alienColors == "green")
    console.log("you earn 5 points");
let aliens_color = "red";
if (aliens_color == "green")
    console.log("no output");
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_colors = "green";
if (alien_colors == "green") {
    console.log(" players just earn 5 point for shooting the alein");
}
else {
    console.log("players just earn 10 points");
}
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let aliens_colors = "yellow ";
if (aliens_colors == "green") {
    console.log("you earn 5 points");
}
else if (aliens_colors == "yellow") {
    console.log("you earn just 10 points");
}
else
    console.log("you are just 15 points");
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age = 100;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a tenagger");
}
else if (age < 65) {
    console.log("you are a elder");
}
else {
    console.log("you are a older");
}
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
let favourite_fruit = ["apple", "mango", "orange", "strawberry", "grapes"];
if (favourite_fruit.includes("apple")) {
    console.log("apple");
}
if (favourite_fruit.includes("mango")) {
    console.log("mango");
}
if (favourite_fruit.includes("orange")) {
    console.log("orange");
}
if (favourite_fruit.includes("strawberry")) {
    console.log("you like bananas");
}
if (favourite_fruit.includes("grapes")) {
    console.log("you like bananas");
}
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let users = ["admin", "eric", "ibrahim", "irha"];
for (let user of users) {
    if (user === "admin") {
        console.log("hello admin, would tou like to see a ststus report?");
    }
    else {
        console.log(`hello ${user}, thankyou for logging in again`);
    }
}
//  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let user = ["admin", "eric", "ibrahim", "irha"];
if (user.length === 0) {
    console.log("we need to find some new users!");
}
else {
    for (let user of users) {
        if (user === "admin") {
            console.log("hello admin, would you like to see a ststus report?");
        }
        else {
            console.log(`hello ${user}, thankyou for logging in again`);
        }
    }
}
user = [];
if (user.length === 0) {
    console.log("we need to find some new users!");
}
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames = ['user1', 'user2', 'user3'];
function displayMessages(users) {
    if (users.length === 0) {
        console.log('We need to find some users!');
    }
    else {
        for (const user of users) {
            console.log(`Hello ${user}, welcome back!`);
        }
    }
}
displayMessages(usernames);
usernames = [];
displayMessages(usernames);
//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Ayesha", "Hasan", "Saad", "Neha", "Admin"];
let new_users = ["Ashna", " Maryam", "Amna", "Ayesha", "Admin"];
let current_users_lowercase = current_users.map(user => user.toLocaleLowerCase());
for (let new_user of new_users) {
    if (current_users_lowercase.includes(new_user.toLocaleLowerCase())) {
        console.log(`sorry ${new_user}, that name is taken`);
    }
    else {
        console.log(`yes ${new_user}, is name is still available`);
    }
}
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function ordinalnumber(number) {
    let suffix = 'th'; // Default suffix
    if (number === 1) {
        suffix = 'st';
    }
    else if (number === 2) {
        suffix = 'nd';
    }
    else if (number === 3) {
        suffix = 'rd';
    }
    return suffix;
}
numbers.forEach(number => {
    console.log(`${number}${ordinalnumber(number)}`);
});
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
const favoritePizzas = ['Pepperoni', 'Margherita', 'Hawaiian'];
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log('I really love pizza!');
// 35.
// Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
// 
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function makeShirt(size, text) {
    console.log(`you order a ${size} shirt that says ${text}`);
}
makeShirt(`large`, `" i want to be a best programmer"`);
makeShirt(`mediun`, `"life goes on"`);
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function makeshirt(size = `large`, text = `i love typescript`) {
    console.log(`you have order a ${size} shirt that says ${text}`);
}
makeshirt();
makeshirt(`medium`);
makeshirt();
makeshirt(`small `, `never give up`);
// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country = `pakistan`) {
    console.log(`${city} is in ${country}`);
}
describe_city(`karachi is in pakistan`);
describe_city(`london is in england`);
describe_city(`lahore is in punjab`);
// 39
function country_city(city, country) {
    return `${city} , ${country} `;
}
let c1 = country_city(`bussan `, `southkorea`);
let c2 = country_city(`islamabad`, `pakistan`);
let c3 = country_city(` las vegas`, `america`);
console.log(c1);
console.log(c2);
console.log(c3);
// 39
function discribe_city(city, country = `PAKISTAN`) {
    console.log(`${city}is in ${country}`);
}
discribe_city(` KARACHI `); //default sentence
discribe_city(` FRANCE , EURAPE `);
discribe_city(`LAHORE`, ` is in PUNJAB `);
//40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function makeAlbum(artist, title) {
    const distinories = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return distinories;
}
let album = makeAlbum("AYESHA", "fly");
console.log(album);
album = makeAlbum("SAAD", "life goes on");
console.log(album);
album = makeAlbum("HASAN", "light");
console.log(album);
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magicians = ["usman", "haseeb", "wajahat"];
show_magicians(magicians);
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
const magicians2 = ["MAHIR", "SHAHMEER", "UMAR"];
console.log("Original list of magicians:");
make_great(magicians2);
show_magicians(magicians2);
console.log("\nModified list of magicians:");
show_magicians(magicians2);
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + `the great`);
    }
    return greatMagicians;
}
const magicians3 = ['MAHIR', 'SHAHMEER', 'UMAR'];
const greatmagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatmagicians2);
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function makeSandwich(...items) {
    console.log("You ordered a sandwich with the following items:");
    for (const item of items) {
        console.log("- " + item);
    }
}
console.log("Order 1:");
makeSandwich("Cheese", "Tomato");
console.log("\nOrder 2:");
makeSandwich("bread", "katchup", "Mustard", "Mayonnaise");
console.log("\nOrder 3:");
makeSandwich("vegies", "Cheese", "souce", "salt");
function createCar(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
const myCar = createCar("Toyota", "honda", ["color", "red"], ["year", 2022]);
console.log("Car information:");
console.log(myCar);
