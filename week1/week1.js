//1 and 2
var mybooks = ["forrest_gump", "great_expectations", "the_monk_who_sold_his_monk", "the_amsterdam_connection", "the_little_prince", "the_secret", "the_life_of_frederick_douglass", "love_and_tolerance", "pearls_of_wisdom", "twelve_years_as_a_slave"];
console.log(mybooks);

//3
/*var titles=function()({
var mybooks = ["forrest_gump", "great_expectations", "the_monk_who_sold_his_monk", "the_amsterdam_connection", "the_little_prince", "the_secret", "the_life_of_frederick_douglass", "love_and_tolerance", "pearls_of_wisdom", "twelve_years_as_a_slave"];
var ul = document.createElement('ul');
document.getElementById('mybooks').appendChild(ul);

mybooks.forEach(function (name) {
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += name;
});*/
//4 
var myobjects = [
    { title: "forrest_gump", language: "english  ", author: "Winston Groom " },
    { title: "great_expectations ", language: "english   ", author: "Charles Dickens " },
    { title: "the_monk_who_sold_his_monk ", language: "english", author: "Robin Sharma" },
    { title: "the_amsterdam_connection ", language: "english ", author: "Sue Leather" },
    { title: "the_little_prince ", language: "english ", author: "Antonia de Saint" },
    { title: "the_secret ", language: "english ", author: "Rhonda Byrne" },
    { title: "the_life_of_frederick_douglass ", language: "english ", author: "Frederick Douglass" },
    { title: "love_and_tolerance", language: "english ", author: "Fethullah Gulen" },
    { title: "pearls_of_wisdom ", language: "english ", author: "Fethullah Gulen" },
    { title: "twelve_years_as_a_slave ", language: "english ", author: "Solomon Northup " }
];
/*function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
   
        // Create the list item:
        var item = document.createElement('li'); */

function myFunction() {
    // Create the list element:
    var list = document.createElement("ul");

    for (var i = 0; i < myobjects.length; i++){
        // Create the list item:
        var item = document.createElement("li");
        item.textContent = myobjects[0].title;

        // Add it to the list:
        list.appendChild(item);
}
    
    return list;
}

// Finally, return the constructed list:

/*var newElement = document.createElement("ul");
console.log(newElement);
newElement.textContent = myobjects[0].title;*/