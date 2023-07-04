import $ from "jquery";
import _ from 'lodash';

$("<p> Holberton Dashboard </p>").appendTo("body");
$("<p> Dashboard data for the students </p>").appendTo("body");
$("<button type='button'>Click here to get started</button>").appendTo("body");
$("<p id='count'></p>").appendTo("body");
$("<p> Copyright - Holberton School</p>").appendTo("body");

let count = 0; // keeps count of how many times there was a count

// updates paragraph with id count with the no of times button was clicked
function updateCounter() {
	count++;
	$("#count").html(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter));

