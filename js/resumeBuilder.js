/*
This is empty on purpose! Your code to build the resume will go here.
 */

var awesomeThoughts = "I am yo mama and I am AWESOME!";
console.log(awesomeThoughts);
$("#main").append(funThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);

var name = "7SA";
var role = "web dev";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesomeness"];
$("#main").append(skills);

var bio = {
	name: "Philip J. Fry",
	role: "Delivery Boy",
	contact: "philipjfry@planetexpress.net",
	picURL: "https://github.com/7sa/frontend-nanodegree-resume/blob/master/images/fry.jpg",
	welMSG: "Oh, NOW I get it!",
	skills: skills
};

$("#main").append(bio.welMSG);

var work = {
	position: "Delivery Boy",
	employer: "Planet Express",
	yearsWorked: 7,
	city: "New New York"
};

var education  = {
	name: "Mars University",
	years: "several days",
	city: "New York"
};

$("#main").append(work["position"]);

$("#main").append(education.name);