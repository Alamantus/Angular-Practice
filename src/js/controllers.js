var currentDate = new Date();

app.controller("Content", function($scope) {
	$scope.currentYear = currentDate.getFullYear();
	$scope.siteTitle = "Robbie Antenesse";

	$scope.summaryTitle = "At a Glance";
	$scope.traits = [
		{
			"name"		: "Fast",
			"icon"		: "images/icons/fast.png",
			"details"	: "Finishes presentable prototypes in 7–10 days"
		},
		{
			"name"		: "Flexible",
			"icon"		: "images/icons/flexible.png",
			"details"	: "Learns new APIs and converts code between languages"
		},
		{
			"name"		: "Resourceful",
			"icon"		: "images/icons/resourceful.png",
			"details"	: "Finds the most cost-effective solutions to problems"
		}
	];
	knuthShuffle($scope.traits);

	$scope.skillsTitle = "Skills";
	$scope.skills = [
		{
			"name"			: "AngularJS",
			"icon"			: "images/icons/angular.png",
			"specifics"	: "Website templating and auto-populating",
			"yearBegan"	: 2016,
			"links"			: [
											"https://alamantus.github.io"
										]
		},
		{
			"name"			: "Bootstrap",
			"icon"			: "images/icons/bootstrap.png",
			"specifics"	: "Clean, consistent website styling",
			"yearBegan"	: 2013,
			"links"			: [
											"https://alamantus.github.io",
											"http://insanityjam.com"
										]
		},
		{
			"name"			: "C# .NET",
			"icon"			: "images/icons/csharp.png",
			"specifics"	: "Game Development in Unity 3D Game Engine",
			"yearBegan"	: 2013,
			"links"			: [
											"https://alamantus.itch.io"
										]
		},
		{
			"name"			: "CSS3",
			"icon"			: "images/icons/css.png",
			"specifics"	: "Extensive web templating and styling experience",
			"yearBegan"	: 2010,
			"links"			: [
											"http://www.alamantus.com",
											"http://lexicon.ga"
										]
		},
		{
			"name"			: "HTML5",
			"icon"			: "images/icons/html.png",
			"specifics"	: "Extensive web templating and styling experience",
			"yearBegan"	: 2010,
			"links"			: [
											"http://www.alamantus.com",
											"http://lexicon.ga"
										]
		},
		{
			"name"			: "JavaScript",
			"icon"			: "images/icons/javascript.png",
			"specifics"	: "Clean, efficient EMCA2015 (ES6) programming for fast, interactive websites",
			"yearBegan"	: 2012,
			"links"			: [
											"https://github.com/Alamantus"
										]
		},
		{
			"name"			: "jQuery",
			"icon"			: "images/icons/jquery.png",
			"specifics"	: "Easy understanding of APIs to make JavaScript programming easier",
			"yearBegan"	: 2013,
			"links"			: [
											"http://checkpointer.tk"
										]
		},
		{
			"name"			: "MySQL",
			"icon"			: "images/icons/mysql.png",
			"specifics"	: "Database design, management, and API calls",
			"yearBegan"	: 2010,
			"links"			: [
											"http://lexicon.ga",
											"http://checkpointer.tk",
											"http://graceaware.com"
										]
		},
		{
			"name"			: "NodeJS",
			"icon"			: "images/icons/node.png",
			"specifics"	: "Experience with command line tools and package management with NPM",
			"yearBegan"	: 2016,
			"links"			: [
											"https://github.com/Alamantus"
										]
		},
		{
			"name"			: "PHP",
			"icon"			: "images/icons/php.png",
			"specifics"	: "Vanilla PHP and API construction",
			"yearBegan"	: 2012,
			"links"			: [
											"http://lexicon.ga",
											"http://checkpointer.tk",
											"http://graceaware.com"
										]
		},
		{
			"name"			: "Sass",
			"icon"			: "images/icons/sass.png",
			"specifics"	: "Clean, readable stylesheets for improved styling management",
			"yearBegan"	: 2016,
			"links"			: [
											"https://alamantus.github.io",
											"http://playchompy.com"
										]
		},
		{
			"name"			: "Wordpress",
			"icon"			: "images/icons/wordpress.png",
			"yearBegan"	: 2008,
			"specifics"	: "Site management and theme customization",
			"links"			: [
											"http://graceaware.com"
										]
		}
	];
	knuthShuffle($scope.skills);

	$scope.projectsTitle = "Portfolio";
	$scope.projectsMoreInfo = "More about this...";
	$scope.numProjectsBeforeHide = 6;
	$scope.moreProjectsTitle = "More Projects";
	$scope.showMoreInfo = function (project) {
		return project.details.role != '' && project.details.skills != '';
	};
	$scope.projects = [
		{
			"name"				: "This Portfolio Site",
			"thumbnail"		: "images/thumbnails/angular.jpg",
			"type"				: "Website",
			"startDate"		: "March 20, 2016",
			"endDate"			: "March 21, 2016",
			"link"				: "./",
			"snippet"			: "Designed and built website with AngularJS, Bootstrap, and Sass.",
			"details"			: {
												"role"			: "All",
												"skills"		: "AngularJS, Bootstrap, Sass, Github",
												"process"		: "I realized that I needed a more coherent web presence where I could attractively feature and describe all of my projects in one place. \
																			While researching around templating software to make my life easier, I found that there is a large demand for AngularJS developers, so I \
																			decided that it would be a great skill to build.<br>\
																			After struggling to build the website from scratch for a while, I decided that using Bootstrap and Sass to style the site would be the \
																			best use of my time instead. I thought of a design that would be nice for both large and small screens and started researching how to \
																			get it done.<br>\
																			In the end, I came up with what you see now.",
												"lessons"		: "Finally learning AngularJS and using Sass on a larger scale has been a very rewarding experience. \
																			So far, I have learned how to: <ul><li>set up an AngularJS application with repeats, templates, and filters,</li>\
																			<li>integrate Bootstrap with an AngularJS app and custom Sass styling,</li>\
																			<li>make better animations with CSS3.</li></ul>\
																			I will keep expanding this site as I start and complete more projects!"
											}
		},
		{
			"name"				: "Radio Silence",
			"thumbnail"		: "images/thumbnails/radio-silence.jpg",
			"type"				: "Game",
			"startDate"		: "September 1, 2016",
			"endDate"			: "September 11, 2016",
			"link"				: "https://alamantus.itch.io/radio-silence",
			"snippet"			: "Built with C# in Unity 3D in 10 days for the <a href='https://itch.io/jam/fermi-paradox-jam' target='_blank'>Fermi Paradox Jam</a>.",
			"details"			: {
												"role"			: "Code, Development, Design, Art (models, GUIs)",
												"skills"		: "C#, Unity 3D, PHP, MySQL, GiMP, Blender",
												"process"		: "A friend of mine approached me with the idea to create a scene featuring a radio and some stars in order to participate \
																			in the <a href='https://itch.io/jam/fermi-paradox-jam' target='_blank'>Fermi Paradox Jam</a>. I liked the idea and expanded \
																			the game concept from there. What if players were trying to receive messages from space and in the end unknowingly were \
																			communicating with each other?<br>\
																			I started working on the game at the start of the jam by creating the 3D models with Blender for the game and then extrapolating the UI\
																			from how the models ended up looking. Then I moved to coding with C# and made the stars viewed through the periscope generate in a \
																			grid with random offsets and sizes. I ran into trouble getting the knobs in the radio UI to turn, but was able to figure it out \
																			by manipulating the sprite's angle directly and using the angle value to set desired radio stations.<br>\
																			I was also able to layer multiple text UI elements to give the effect of translating coded messages letter by letter. It took \
																			a good deal of trouble to get it working properly, but eventually I just forced it to work by simplifying some code I had \
																			previously overthought.",
												"lessons"		: "This project gave me more experience with the Unity 3D engine and its UI elements. It also provided me with the opportunity \
																			to collaborate more closely with a friend to make sure that the final result followed the design specifications correctly.<br>\
																			I also gained more experience with building simple APIs to insert and access data from a MySQL database using PHP, as well as \
																			more experience manipulating strings using .NET's <code>System.Text</code> namespace and methods in C#."
											}
		},
		{
			"name"				: "Public Pinboard",
			"thumbnail"		: "images/thumbnails/public-pinboard.jpg",
			"type"				: "Tool",
			"startDate"		: "May 29, 2016",
			"endDate"			: "June 2, 2016",
			"link"				: "http://alamantus.github.io/Public-Pinboard",
			"snippet"			: "Built with PHP for posting small post-it note-like messages to a public space that allows anyone to also remove the messages.",
			"details"			: {
												"role"			: "All",
												"skills"		: "HTML5, PHP, Bootstrap",
												"process"		: "",
												"lessons"		: "File IO with PHP."
											}
		},
		{
			"name"				: "Trade Winds",
			"thumbnail"		: "images/thumbnails/trade-winds.jpg",
			"type"				: "Game",
			"startDate"		: "April 1, 2016",
			"endDate"			: "May 18, 2016",
			"link"				: "https://alamantus.itch.io/trade-winds",
			"snippet"			: "Designed and built with JavaScript and HTML5 Canvas using my OversimplifiedJS game engine in 14 days for the <a href='https://itch.io/jam/lowrezjam2016' target='_blank'>2016 LOWREZJAM</a> and updated incrementally.",
			"details"			: {
												"role"			: "Code, Development, Design, Art",
												"skills"		: "JavaScript, HTML5, GiMP",
												"process"		: "",
												"lessons"		: ""
											}
		},
		{
			"name"				: "OversimplifiedJS",
			"thumbnail"		: "",
			"type"				: "Tool",
			"startDate"		: "November 15, 2014",
			"endDate"			: "April 20, 2016",
			"link"				: "https://github.com/Alamantus/OversimplifiedJS",
			"snippet"			: "Designed and built with JavaScript and HTML5 Canvas in 7 days for fun and updated incrementally to easily make small web games.",
			"details"			: {
												"role"			: "All",
												"skills"		: "JavaScript",
												"process"		: "On November 15, 2014, I decided that I wanted to try to create a JavaScript game engine, so I started building a library to do so. \
																			I researched how to make JavaScript draw to and update HTML5 canvas elements, and after about 7 days, I had a working prototype finished. \
																			As I learned more about how JavaScript works and how to utilize JavaScript objects and make more efficient functions, I gradually \
																			improved the game engine as I created games. The development process of Trade Winds helped drive major improvement and optimization \
																			for Oversimplified.",
												"lessons"		: "Building and using this project taught me a lot of the inner workings and quirks of JavaScript. I learned all about JavaScript objects \
																			and how nested objects and functions work. I was also able to learn how to load files into a global variable and how to use audio and other \
																			HTML5 elements."
											}
		},
		{
			"name"				: "Time-to-Page Calculator",
			"thumbnail"		: "images/thumbnails/time-to-page.jpg",
			"type"				: "Tool",
			"startDate"		: "June 15, 2015",
			"endDate"			: "June 19, 2015",
			"link"				: "https://alamantus.itch.io/time-to-page",
			"snippet"			: "Built with JavaScript to convert audiobook time to book page and vice-versa.",
			"details"			: {
												"role"			: "All",
												"skills"		: "JavaScript",
												"process"		: "",
												"lessons"		: ""
											}
		},
		{
			"name"				: "Insanity Jam",
			"thumbnail"		: "images/thumbnails/insanity-jam.jpg",
			"type"				: "Website",
			"startDate"		: "March 1, 2014",
			"endDate"			: "November 10, 2014",
			"link"				: "http://insanityjam.com",
			"snippet"			: "Designed and built with HTML5, PHP, and Bootstrap for giving information about self-hosted game jam.",
			"details"			: {
												"role"			: "All",
												"skills"		: "HTML5, Bootstrap, JavaScript, PHP, MySQL",
												"process"		: "",
												"lessons"		: ""
											}
		},
		{
			"name"				: "DataFall",
			"thumbnail"		: "",
			"type"				: "Game",
			"startDate"		: "March 1, 2014",
			"endDate"			: "March 10, 2014",
			"link"				: "https://alamantus.itch.io/datafall",
			"snippet"			: "Designed and built with C# in Unity 3D for the 2014 Cyberpunk Jam (requires browser plugin to play).",
			"details"			: {
												"role"			: "All",
												"skills"		: "C#, Unity 3D, GiMP, Blender",
												"process"		: "",
												"lessons"		: ""
											}
		}
	];

	$scope.informationTitle = "About Me";
	$scope.information = [
		{
			"heading"	: "My Story",
			"text"		: "Blah blah blah."
		},
		{
			"heading"	: "My Interests",
			"text"		: "Blah blah blah."
		}
	];
});
