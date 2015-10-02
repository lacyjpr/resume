var bio = {
	"name": "Jean-Paul Lacy ",
	"role": "Web Developer ",
	"contacts": {
		"mobile": "336-408-5256",
		"email": "lacyjpr@gmail.com",
		"github": "lacyjpr",
		"twitter": "@lacyjpr",
		"location": "Newport, OR"
	},
	"welcomeMessage": "Problem Solver ",
	"skills": ["HTML", "CSS", "Managing", "Coaching", "Teaching", "Mentoring", "Customer Service"],
	"bioPic": "images/JPLacy.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkill);
}

var work = {
	"jobs": [
	{
		"employer": "City of Newport",
		"title": "Control Desk Clerk, Newport Recreation Center",
		"location": "Newport, OR",
		"dates": "May 2014 - Current",
		"description": "Customer Service. Greet customers and meet their needs as necessary. Manage a cash register. Membership and pass sales. Room reservations and scheduling."
	},
	{
		"employer": "Wake Forest University",
		"title": "Debate Coach",
		"location": "Winston-Salem, NC",
		"dates": "June 2010-November 2011, August 2001-July 2009",
		"description": "Coach, travel and administer a team of 20 debaters travelling to 12 tournaments annually. Lead technology initiatives to transition to paperless debate, create a nationwide shared electronic scouting system and support squad technology resources. Host and plan annual debate tournaments with 400-1000 attendees. Supervise a team of six assistant coaches."
	},
	{
		"employer": "Wake Forest University",
		"title": "Interim Director of Debate",
		"location": "Winston-Salem, NC",
		"dates": "July 2009-June 2010",
		"description": "Direct, oversee, budget, administer and manage Wake Forest Debate. Responsible for a team of 20 debaters, seven assistant coaches, event hosting, and a travel budget of $120,000."
	},
	{
		"employer": "Whitman College",
		"title": "Debate Coach",
		"location": "Walla Walla, WA",
		"dates": "August 1997-June 2001",
		"description": "Primary responsibility: Argument coach. Execute transition to digital file completion in 1998."
	},
	{
		"employer": "Lakeside High School",
		"title": "Social Studies Teacher, Debate Coach",
		"location": "Augusta, GA",
		"dates": "August 1995-June 1996",
		"description": "Teach US History, World History and Debate. Administer coach and travel the Lakeside High School Debate Team"
	}
  ]
}

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork()

var education = {
	"schools": [
		{
			"name": "James Madison University",
			"location": "Harrisonburg, VA, US",
			"degree": "BS",
			"majors": ["General Social Science"],
			"dates": 1992,
			"url": "http://www.jmu.edu/"
		},
		{
			"name": "Wake Forest University",
			"location": "Winston-Salem, NC, US",
			"degree": "Graduate Study Towards MA",
			"majors": ["Communication"],
			"dates": 1994,
			"url": "http://www.wfu.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Introduction to Programming Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Introduction to Programming Final Project",
			"dates": "2015",
			"description": "Final project for Udacity's Introduction to Programming Nanodegree. Webapp hosted by Google App Engine. Includes my notes for the course, a comments section, and JavaScript for collapsible navigation.",
			"images": ["images/ipnd1.jpg", "images/ipnd2.jpg"]
		},
		{
			"title": "Portfolio",
			"dates": "2015",
			"description": "First project for Udacity's Front-End Web Developer Nanodegree. We were given a pdf design mockup to replicate and customize. Includes customized responsive images and interactive modals.",
			"images": ["images/portfolio1.jpg", "images/portfolio2.jpg"]
		}
	]
}

function inName (name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);