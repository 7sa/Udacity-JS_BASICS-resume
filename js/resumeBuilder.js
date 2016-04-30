/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name: "Philip J. Fry",
	role: "Delivery Boy",
	welcomeMessage: "Oh, NOW I get it!",
	contacts: {
		email: "philipjfry@planetexpress.net",
		twitter: "@frymeariver",
		location: "New New York"
	},
	skills: ["delivery", "holophoning", "lacking Delta Brainwave"],
	bioPic: "images/fry.jpg",

	displayHeader: function() {
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
	},

	displayContacts: function() {
		var arr = [];
		arr[0] = HTMLemail.replace("%data%", this.contacts.email);
		arr[1] = HTMLtwitter.replace("%data%", this.contacts.twitter);
		arr[2] = HTMLlocation.replace("%data%", this.contacts.location);
		for (var i = 0; i < arr.length; ++i) {
			$("#topContacts").append(arr[i]);
			$("#footerContacts").append(arr[i]);
		}
	},

	displayRest: function() {
		var formattedPic = HTMLbioPic.replace("%data%", this.bioPic);
		var formattedMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedPic);
		$("#header").append(formattedMsg);
		if (this.skills !== undefined) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; ++i) {                           // append formatted skills
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
	}
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
	],

	display: function() {
		for (var school in education.schools) {                                                // append work history
			$("#education").append(HTMLschoolStart);
			var formattedSchool = HTMLschoolName.replace("%data%", this.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].major);
			$(".education-entry:last").append(formattedSchool + formattedDegree);
			$(".education-entry:last").append(formattedDates + formattedLocation);
			$(".education-entry:last").append(formattedMajor);
		}
		for (var webschool in education.onlineCourses) {                                                // append work history
			$("#education").append(HTMLonlineClasses);
			var formattedWebTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[webschool].title);
			var formattedWebSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[webschool].school);
			var formattedWebDates = HTMLonlineDates.replace("%data%", this.onlineCourses[webschool].dates);
			var formattedWebURL = HTMLonlineURL.replace("%data%", this.onlineCourses[webschool].url);
			$(".education-entry:last").append(formattedWebTitle + formattedWebSchool);
			$(".education-entry:last").append(formattedWebDates);
			$(".education-entry:last").append(formattedWebURL);
		}
	}
};

var work = {
	jobs: [
		{
			"employer": "Planet Express",
			"location": "New New York",
			"title": "Delivery Boy",
			"dates": "3000 - 3007",
			"description": "Deliver packages for Planet Express LLC."
		}, {
			"employer": "Panucci's Pizza",
			"location": "New York",
			"title": "Delivery Boy",
			"dates": "1997 - 1999",
			"description": "Delivered pizzas for Mr. Panucci."
		}
	],
	display: function() {
		for (var job in work.jobs) {                                                // append work history
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
			var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			$(".work-entry:last").append(formattedDates + formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	projects: [
		{
			"title": "Lucy Liu Robot",
			"dates": "3003",
			"description": "Used Nappster to create a Lucy Liubot",
			"images": ["images/liubot/char_54639.jpg", "images/liubot/315_lucy_liu.jpg", "images/liubot/Lucy-Liu-Futurama.jpg"]
		}, {
			"title": "Holophoning",
			"dates": "3003 - 3007",
			"description": "Taught myself to play the holophoner",
			"images": ["images/holophonor/Holophonor.jpg", ".iages/holophonor/418nl-32.jpg", "images/holophonor/hololeela.gif"]
		}
	 ],

	 display: function() {
	 	for (var proj in this.projects) {                                                // append work history
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[proj].title);
			var formattedDates = HTMLprojectDates.replace("%data%", this.projects[proj].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[proj].description);

			var appendArr = [formattedTitle, formattedDates, formattedDescription];

			// append to project entry
			for (var i = 0; i < appendArr.length; ++i) {
				$(".project-entry:last").append(appendArr[i]);
			}

			// append project images
			if (this.projects[proj].images.length > 0) {
				for (var image in this.projects[proj].images)
					var formattedImage = HTMLprojectImage.replace("%data%", this.projects[proj].images[image]);
					$(".project-entry:last").append(formattedImage);
			}
		}
	 }
};




// RANDOM STUFF

// console.logs click locations
$(document).click(function(loc) {
	var x = loc.pageX;
	logClicks(x,y);
});


// adds internationalize button to page
$("#main").append(internationalizeButton);
function inName() {
	bio.name = bio.name.trim().split(" ");
	var first = bio.name[0][0].toUpperCase() + first.slice(1).toLowerCase();
	var last = bio.name[2].toUpperCase();
	bio.name = first + " " + last;
	return bio.name;
}


// adds map
$("#mapDiv").append(googleMap);




// CALLS DISPLAY FUNCTIONS

bio.displayHeader();
bio.displayContacts();
bio.displayRest();
work.display();
projects.display();
education.display();