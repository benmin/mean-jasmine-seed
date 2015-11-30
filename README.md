# angular-express-jasmine
This seed is a great starting point for developing a web app with AngularJS on the front end and NodeJS/Express on the back end.

Key features:
- It is configured with Jasmine and Karma to test both the client- and server-side javascript.
- Many grunt tasks are already configured: linting, minifying, unit testing, moving code to a 'dist' directory, etc.
- It doesn't use Jade (which is default with Express projects) as a templating language. Given that Angular already has its own templating, I decided it would be less confusing if there wasn't another templating language on top of it.

## Getting Started
#### Install node
First, you need to install NodeJS. Head over to https://nodejs.org for instructions on how to download and install it.

Once it is installed properly, you should have both `node` and `npm` (Node Package Manager) available on the command-line; to test this, you can check the versions of node and npm.
```
node -v
npm -v
```
These should return the versions of node and npm, respectively.

You will use npm to manage your server-side dependencies, development tools, and test tools. 

#### Install bower
Second, you need to install bower to manage your front-end dependencies (such as AngularJS). You can install it globally using a simple npm command.
```
npm install bower -g
```
Note: the `-g` tells npm to install the package globally (available to all node projects), instead of locally (available only to the current node project).
Again, to test that bower installed correctly, check the version.
```
bower -v
```

You will use bower to manage your client-side dependencies, such as AngularJS.

#### Install express
Now that you have your dependency managers installed, it is time to install the web application framework, express. Just like bower, express is a node module, so it is installed with npm.
```
npm install express -g
```
To test, check the version (note the uppercase V this time).
```
express -V
```

#### Install git
You will need git to checkout the repository, so go ahead and install that. https://git-scm.com

#### Fork and clone repository
Now that you have your development environment set up, go ahead and fork this repository.
Use git to clone your new repository to your computer.
```
git clone <repo_url>
```

## Time to develop!
