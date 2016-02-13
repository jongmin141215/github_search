# Github User Search

This application helps you search for users on Github. The app is written in JavaScript using AngularJS framework.

![Image of Homepage](github_main.png)

Demo
----
visit http://github-search.s3-website-us-west-2.amazonaws.com/

Getting started
----
```
$ git clone git@github.com:jongmin141215/github_search.git
$ cd github_search
$ npm install
$ (sudo) npm install -g bower
$ bower install
$ (sudo) npm install http-server -g
$ http-server
```

visit http://localhost:8080

Running tests
----
To run Karma
```
$ npm install karma --save-dev
$ npm install karma-jasmine karma-chrome-launcher karma-phantomjs-launcher --save-dev
$ npm install jasmine-core phantomjs --save-dev
$ (sudo) npm install -g karma-cli
$ karma start test/karma.conf.js
```
To run Protractor
(Install Java Development Kit(JDK): http://www.oracle.com/technetwork/java/javase/downloads/index.html)
```
$ (sudo) npm install -g Protractor
$ webdriver-manager update
$ webdriver-manager start (leave this server running)
$ npm install --save-dev protractor
$ http-server (leave this running)
$ protractor test/e2e/conf.js
```

Technologies
----
* Frontend Framework: AngularJS
* Testing: Jasmine, Protractor, Karma
* Hosting: Amazon S3
* Styling: Bootstrap
