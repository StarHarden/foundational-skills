/* 
  how to use javaScript to grab element(s) from
  the DOM(Document Object Model)
  - querySelector(...)
  - querySelectorAll(...)
 */

/* 
 Grab the <h1> element
 Grab the <li> element with the id of butter
 Grab the every single <li> element
 Grab the <li> element with the data key of 'order209'
 */
// const items = ['Butter', 'Crust', 'Apples','Cinnamon', 'Sugar'];

const list1 = document.querySelector("h1");
console.log(list1);

const item1 = document.querySelector("#butter");
console.log(item1);

const nodeListItems = document.querySelectorAll("li");
console.log(nodeListItems);
// transform node list into array using Array.from
const item3 = Array.from (nodeListItems);
console.log(item3);

// once transformed into array, then run map on it to produce
  //['Butter', 'Crust', 'Apples','Cinnamon', 'Sugar']
  // 'item'

const shoppingList = item3.map(item => {return (item.outerText)});
console.log(shoppingList);

const shoppingList2 = item3.map(item => {return item.outerText});
console.log(shoppingList2);



/*const items = ['Butter', 'Crust', 'Apples','Cinnamon', 'Sugar'];

const itemsList = items.map(list => {
  return (list)
});

console.log(itemsList); I did this to obtaing the array but it is pulling 
from the items array and not from the html.*/

// const keyA = document.querySelector("div[data-key='65']");

const item4 = document.querySelector("li[data-key='order209']");
console.log(item4)

// /* use any method you'd like to convert all the contents of strings into upper cased.
// const strings = ['nba','omg','rofl','peanut butter'];
// so that the output looks like this
// [ 'NBA', 'OMG', 'ROFL', 'PEANUT BUTTER' ]
// */

const item5 = item3.map(item => {return item.outerText.toUpperCase()});
console.log(item5);
