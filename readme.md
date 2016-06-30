## Juniper, the Human Made pattern library

### Personnel

#### Developers

* Matthew Haines-Young, @mattheu
* Samantha Miller, @sambulance
* Peter Wilson, @peterwilsoncc

#### Internal clients

Human made handbook team

### Development setup

Run these commands to get set up locally

1. `git clone --recursive git@github.com:humanmade/hm-pattern-library.git hm-pattern-library.dev`
1. `cd hm-pattern-library.dev`
1. If you do not have gulp installed on your machine, install it globally by running `npm install gulp-cli -g`
1. `npm install`
1. The sass and html can be compiled by running the command `gulp`.

The Human Made pattern library generates flat HTML and does not require a web server to be loaded. Once compiled, the HTML can be opened in your browser via the file system.

### Contributing

You can fork the repository should you wish to contribute any code.

#### Creating a branch

All contributions should relate to an issues. If the issue does not exist, open an issue in the original repository, this will give your issue a number.

When creating a branch, name your branch `[issue-number]-short-summary`.

#### Submitting a pull request

Before submitting a pull request, you will need to confirm your sass meets our coding standards by running `gulp lint-sass`. 

When you push your branch, you will be able to submit a pull request. Travis CI runs on the repository and will need to pass on all pull requests.

If Travis CI fails, you can push further commits to the branch to fix the build.
