/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name: "Philip J. Fry",
	role: "Delivery Boy",
	welcomeMessage: "Oh, NOW I get it!",
	contacts: {
		email: "philipjfry@planetexpress.net",
		twitter: "@fry",
		location: "New New York"
	},
	skills: ["delivery", "holophoning", "lacking Delta Brainwave"],
	bioPic: "https://github.com/7sa/frontend-nanodegree-resume/blob/master/images/fry.jpg"
};


var education  = {
	schools: [
		{
			name: "Mars University",
			location: "Mars",
			degree: "n/a",
			majors: ["undeclared"],
			dates: "several days",
			url: "https://en.wikipedia.org/wiki/Mars_University"
		}, {
			name: "Coney Island Community College",
			location: "Coney Island",
			degree: "n/a",
			majors: ["undeclared"],
			dates: "several months",
			url: "http://futurama.wikia.com/wiki/Coney_Island_Community_College"
		}
	],
	onlineCourses: [
		{
			title: "JavaScript Basics",
			school: "Udacity",
			dates: 2016,
			url: "https://classroom.udacity.com/courses/ud804"
		}, {
			title: "How to Use Git and GitHub",
			school: "Udacity",
			dates: 2016,
			url: "https://classroom.udacity.com/courses/ud775"
		}, {
			title: "Basic Algorithm Scripting",
			school: "freeCodeCamp",
			dates: "2016 -",
			url: "https://www.freecodecamp.com/map#nested-collapseBasicAlgorithmScripting"
		}, {
			title: "Object Oriented and Functional Programming",
			school: "freeCodeCamp",
			dates: "2016",
			url: "https://www.freecodecamp.com/map#nested-collapseObjectOrientedandFunctionalProgramming"
		}, {
			title: "Basic JavaScript",
			school: "freeCodeCamp",
			dates: "2016 -",
			url: "https://www.freecodecamp.com/map#nested-collapseBasicJavaScript"
		}, {
			title: "Make an Interactive Website",
			school: "Codecademy",
			dates: "2016 -",
			url: "https://www.codecademy.com/en/skills/make-an-interactive-website"
		}, {
			title: "Learn Git",
			school: "Codecademy",
			dates: 2016,
			url: "https://www.codecademy.com/learn/learn-git"
		}, {
			title: "Learn the Command Line",
			school: "Codecademy",
			dates: 2016,
			url: "https://www.codecademy.com/learn/learn-the-command-line"
		}, {
			title: "Make a Website",
			school: "Codecademy",
			dates: 2016,
			url: "https://www.codecademy.com/learn/make-a-website"
		}, {
			title: "JavaScript",
			school: "Codecademy",
			dates: 2016,
			url: "https://www.codecademy.com/learn/javascript"
		}, {
			title: "Ruby",
			school: "Codecademy",
			dates: "2015 -",
			url: "https://www.codecademy.com/learn/ruby"
		}
	]
};

var work = {
	jobs: [
		{
			employer: "Planet Express",
			location: "New New York",
			title: "Delivery Boy",
			dates: "3000 - 3007",
			description: "Deliver packages for Planet Express LLC."
		}, {
			employer: "Panucci's Pizza",
			location: "New York",
			title: "Delivery Boy",
			dates: "1997 - 1999",
			description: "Delivered pizzas for Mr. Panucci."
		}
	]
};

var projects = {
	projects: [
		{
			title: "Lucy Liu Robot",
			dates: 3003,
			description: "Used Nappster to create a Lucy Liubot",
			images: ["http://vignette2.wikia.nocookie.net/en.futurama/images/7/7d/LiuBot.jpg/revision/latest/scale-to-width-down/180?cb=20120404074657&format=webp"]
		}, {
			title: "Holophoning",
			dates: "3003 - 3007",
			description: "Taught myself to playthe holophoner",
			images: ["http://vignette2.wikia.nocookie.net/en.futurama/images/5/5e/Holophonor.jpg/revision/latest?cb=20061012203400"]
		}
	 ]
};




if (bio.skills !== undefined) {                                             // append skills
	$("#header").append(HTMLskillsStart);                                   // append skillsStart

	for (var i = 0; i < bio.skills.length; ++i) {                           // append formatted skills
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}

for (var job in work.jobs) {                                                // append work history
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedEmployer + formattedTitle);
	$(".work-entry:last").append(formattedDates + formattedLocation);
	$(".work-entry:last").append(formattedDescription);
}
