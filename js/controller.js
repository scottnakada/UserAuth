(function () { // IIFE to isolate scope
    'use strict';

    angular.module('gitTemplate')
        .controller('MainCtrl',
        ['$scope',
            function ($scope) {

                // Links to the Platform Apps
                $scope.web = {
                    link: "http://scottnakada.github.io/UserAuth/yoFireAuth/dist/public/index.html"
                };
                $scope.mean = {
                    link: "http://scottnakada.github.io/UserAuth/yoMongoAuth/dist/public/index.html"
                };
                $scope.android = {
                    link: ""
                };
                $scope.ios = {
                    link: "#ios",
                    ionicViewId: "43FF8114"
                };
                $scope.github = {
                    link: "https://github.com/scottnakada/UserAuth"
                };

                // Customize the Platforms Display
                $scope.platforms = {
                    web: true,
                    mean: true,
                    android: true,
                    ios: true,
                    arduino: false,
                    raspberryPi: false,
                    intelEdison: false
                };

                // Customize the Technologies Display
                $scope.technologies = {
                    html5: true,
                    css3: true,
                    javascript: true,
                    jQuery: false,
                    jQueryMobile: false,
                    angularJS: true,
                    bootstrap: true,
                    php: false,
                    python: false,
                    nodeJS: true,
                    expressJS: true,
                    firebase: true,
                    pouchDB: false,
                    couchDB: false,
                    mongoDB: true,
                    mySQL: false
                };

                // Customize the Tools Display
                $scope.tools = {
                    webStorm: true,
                    ionic: true,
                    cordova: true,
                    phoneGap: false,
                    yeoman: true,
                    github: true,
                    npm: false,
                    grunt: false,
                    bower: false
                };

                // Customize the APIs Display
                $scope.api = {
                    facebook: true,
                    google: true,
                    twitter: true,
                    github: true
                };

                // Details, Links, Info
                $scope.details = {
                    web: {
                        name: "Web",
                        image: "images/Web.png",
                        link: "http://www.w3.org/",
                        info: "The World Wide Web (www, W3) is an information space where documents and other web resources are identified by URIs, interlinked by hypertext links, and can be accessed via the Internet."
                    },
                    mean: {
                        name: "Mean",
                        image: "images/Mean.png",
                        link: "http://mean.io/",
                        info: "MEAN is an open-source JavaScript software stack for building dynamic web sites and web applications, that use a combination of MongoDB, Express.js and Angular.js, all of which run upon Node.js."
                    },
                    android: {
                        name: "Android",
                        image: "images/Android.png",
                        link: "https://www.android.com/",
                        info: "Android is a mobile operating system based on the Linux kernel, designed primarily for touchscreen mobile devices."
                    },
                    ios: {
                        name: "Apple",
                        image: "images/Apple.png",
                        link: "http://www.apple.com/",
                        info: "Apple devices, include Apple phones (iPhone) and tablets(iPad)."
                    },
                    arduino: {
                        name: "Arduino",
                        image: "images/Arduino.png",
                        link: "https://www.arduino.cc/",
                        info: "Arduino is the $25 open-source electronics prototyping platform based on easy-to-use hardware and software"
                    },
                    raspberryPi: {
                        name: "Raspberry Pi",
                        image: "images/RaspberryPi.png",
                        link: "https://www.raspberrypi.org/",
                        info: "Raspberry Pi is a $35, credit card sized, Linux based computer"
                    },
                    intelEdison: {
                        name: "Intel Edison",
                        image: "images/IntelEdison.png",
                        link: "https://software.intel.com/en-us/iot/hardware/edison?utm_source=Covario&utm_medium=Paid%20search&utm_content=Q2%20IoT%20SEM%20Campaign%20-%20Covario&utm_campaign=IoT%20SEM%20Covario",
                        info: "Intel Edison is a $50, postage stamp sized computer, with integrated WiFi and Bluetooth"
                    },
                    html5: {
                        name: "HTML 5",
                        image: "images/HTML5.png",
                        link: "http://www.w3schools.com/html/html5_intro.asp",
                        info: "HTML5 is a core technology markup language of the Internet used for structuring and presenting content for the World Wide Web"
                    },
                    css3: {
                        name: "CSS 3",
                        image: "images/CSS3.png",
                        link: "http://www.w3schools.com/css/css3_intro.asp",
                        info: "CSS3 is the latest evolution of the Cascading Style Sheets language"
                    },
                    javascript: {
                        name: "Javascript",
                        image: "images/Javascript.png",
                        link: "http://www.w3schools.com/js/",
                        info: "JavaScript, also known as ECMAScript, is a dynamic programming language"
                    },
                    jQuery: {
                        name: "JQuery",
                        image: "images/Jquery.gif",
                        link: "http://www.w3schools.com/jquery/",
                        info: "jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. jQuery is the most popular JavaScript library in use today."
                    },
                    jQueryMobile: {
                        name: "JQuery Mobile",
                        image: "images/JQueryMobile.png",
                        link: "http://www.w3schools.com/jquerymobile/",
                        info: "jQuery Mobile is a touch-optimized mobile framework, based on Javascript and JQuery, compatible with a wide variety of smartphones and tablet computers."
                    },
                    angularJS: {
                        name: "Angular JS",
                        image: "images/AngularJS.png",
                        link: "http://www.w3schools.com/angular/",
                        info: "AngularJS is an open-source web application framework simplifies development and the testing."
                    },
                    bootstrap: {
                        name: "Bootstrap",
                        image: "images/Bootstrap.png",
                        link: "http://www.w3schools.com/bootstrap/",
                        info: "Twitter Bootstrap web design library was also started at Twitter and is the most popular repository on GitHub"
                    },
                    php: {
                        name: "PHP",
                        image: "images/PHP.png",
                        link: "http://www.w3schools.com/php/",
                        info: "PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language."
                    },
                    python: {
                        name: "Python",
                        image: "images/Python.png",
                        link: "https://www.python.org/doc/",
                        info: "Python is a general-purpose, high-level programming language. Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code"
                    },
                    nodeJS: {
                        name: "Node JS",
                        image: "images/NodeJS.png",
                        link: "https://nodejs.org/api/",
                        info: "Node.js is an open source, cross-platform runtime environment written in JavaScript for server-side and networking applications."
                    },
                    expressJS: {
                        name: "Express JS",
                        image: "images/ExpressJS.png",
                        link: "http://expressjs.com/4x/api.html",
                        info: "Express.js is a Node.js web application server framework, designed for building single-page, multi-page, and hybrid web applications."
                    },
                    firebase: {
                        name: "Firebase DB",
                        image: "images/Firebase.png",
                        link: "https://www.firebase.com/docs/",
                        info: "Firebase is a realtime database which provides an API that allows developers to store and sync data across multiple clients."
                    },
                    pouchDB: {
                        name: "Pouch DB",
                        image: "images/PouchDB.png",
                        link: "http://pouchdb.com/api.html",
                        info: "Pouch DB enables applications to store data locally while offline, then synchronize it with CouchDB and compatible servers when the application is back online, keeping the user's data in sync no matter where they next login."
                    },
                    couchDB: {
                        name: "Couch DB",
                        image: "images/CouchDB.png",
                        link: "http://docs.couchdb.org/en/1.6.1/",
                        info: "CouchDB is a database that completely embraces the web. Store your data with JSON documents. Access your documents and query your indexes with your web browser, via HTTP. Index, combine, and transform your documents with JavaScript."
                    },
                    mongoDB: {
                        name: "Mongo DB",
                        image: "images/MongoDB.png",
                        link: "http://docs.mongodb.org/manual/",
                        info: "MongoDB is a cross-platform document-oriented NoSQL database. MongoDB eschews the traditional table-based relational database structure in favor of JSON-like documents with dynamic schemas (MongoDB calls the format BSON)."
                    },
                    mySQL: {
                        name: "MySQL DB",
                        image: "images/MySQL.png",
                        link: "http://dev.mysql.com/doc/",
                        info: "MySQL is second most widely used, open source relational database management system, used in web applications."
                    },
                    webStorm: {
                        name: "Web Storm",
                        image: "images/WebStorm.png",
                        link: "https://www.jetbrains.com/webstorm/",
                        info: "Web Storm is a commercial IDE for JavaScript, CSS & HTML, which provides automatic code completion, on-the-fly code analysis, refactoring support and VCS integration."
                    },
                    ionic: {
                        name: "Ionic",
                        image: "images/Ionic.png",
                        link: "http://ionicframework.com/docs/",
                        info: "Ionic is a complete open-source SDK for hybrid mobile app development. Built on top of AngularJS and Apache Cordova, Ionic provides tools and services for developing hybrid mobile apps using web technologies like HTML5, CSS, and Sass."
                    },
                    cordova: {
                        name: "Cordova",
                        image: "images/Cordova.png",
                        link: "http://cordova.apache.org/docs/en/5.0.0/",
                        info: "Apache Cordova allows cross platform (Android, iOS, ...) apps to be developed with just HTML, CSS, and JavaScript, with a set of native APIs that allow access to native device functions."
                    },
                    phoneGap: {
                        name: "PhoneGap",
                        image: "images/PhoneGap.png",
                        link: "http://docs.phonegap.com/",
                        info: "PhoneGap is Adobe's extension of Apache Cordova, which allows cross platform (Android, iOS, ...) apps to be developed with just HTML, CSS, and JavaScript, with a set of native APIs that allow access to native device functions."

                    },
                    yeoman: {
                        name: "Yeoman",
                        image: "images/Yeoman.png",
                        link: "http://yeoman.io/",
                        info: "Yeoman is a web-scaffolding tool, which allows rapid setup of directory structure and templates following best practices and tools."
                    },
                    github: {
                        name: "Github",
                        image: "images/Github.png",
                        link: "https://github.com/",
                        info: "Github is a Web-baased graphical interface to the Git repository version control system."
                    },
                    npm: {
                        name: "NPM",
                        image: "images/NPM.png",
                        link: "https://docs.npmjs.com/",
                        info: "NPM (Node Package Manager), written in Javascript, runs through the command line, installs software and manages dependencies for an application."
                    },
                    grunt: {
                        name: "Grunt",
                        image: "images/Grunt.png",
                        link: "http://gruntjs.com/getting-started",
                        info: "Grunt is a JavaScript task runner, which facilitates building, and testing of web-applications."
                    },
                    bower: {
                        name: "Bower",
                        image: "images/Bower.png",
                        link: "http://bower.io/",
                        info: "Bower is a package management system for client-side programming on the World Wide Web. It depends on Node.js and npm. It works with git and GitHub repositories."
                    },
                    facebook: {
                        Name: "Facebook",
                        image: "images/Facebook.png",
                        link: "https://developers.facebook.com/",
                        info: "Facebook is a social networking service.  The API provides OAuth login support and info about the users."
                    },
                    google: {
                        Name: "Google",
                        image: "images/Google.png",
                        link: "https://developers.google.com/",
                        info: "Google is a group of APIs for accessing information collected by Google.  The API provides OAuth login support."
                    },
                    twitter: {
                        Name: "Twitter",
                        image: "images/Twitter.png",
                        link: "https://dev.twitter.com/",
                        info: "Twitter is a messaging service.  The Twitter API provides OAuth login support."
                    }
                }
            }
        ]
    );
}()); // End IIFE
