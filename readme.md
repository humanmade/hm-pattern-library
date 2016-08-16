# Juniper 

The Human Made Web Style Guide and Pattern Library.

Take a look here: [https://humanmade.github.io/hm-pattern-library/](https://humanmade.github.io/hm-pattern-library/)

#### Maintained by:

* Matthew Haines-Young, @mattheu
* Samantha Miller, @sambulance
* Peter Wilson, @peterwilsoncc

#### Internal clients

Human made handbook team

### Usage Instructions

[Refer to the documentation for full usage instructions.](https://humanmade.github.io/hm-pattern-library/pages/instructions.html)

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

#### CSS Naming convention

This repository uses a modified version of the SUIT CSS naming convention. Class names make use of `PascalCase`.

##### Components

Sub-components are indicated with an underscore, variants with a hyphen. For example:

* `SomeComponent`
* `SomeComponent_SubComponent`
* `SomeComponent-ComponentVariant`

In the styles/components directory, components should be placed in a file named for the component, `_SomeComponent.scss`.

##### Utilities

Utilities are prefixed with `util-`, for example `util-Clearfix`. A utility should be placed in the styles/utilities directory in a file named for the utility, `_Clearfix.scss`.

##### Vendor files

Class names in vendor files should not be changed, the files should be placed in the styles/vendor directory and included as any other file would be included. These files do not need to meet our linting standards.

#### Creating a branch

All contributions should relate to an issues. If the issue does not exist, open an issue in the original repository, this will give your issue a number.

When creating a branch, name your branch `[issue-number]-short-summary`.

#### Submitting a pull request

Before submitting a pull request, you will need to confirm your sass meets our coding standards by running `gulp lint-sass`. 

When you push your branch, you will be able to submit a pull request. Travis CI runs on the repository and will need to pass on all pull requests.

If Travis CI fails, you can push further commits to the branch to fix the build.

## Changelog

**1.0.3**

* Better gulp tasks for icons and logos. Note if you are referencing logo file directly, you will need to update your paths.

**1.0.2**

* Add styles for WordPress galleries
* Make variables defaults

**1.0.1**

* Prevent images breaking out of container.

**1.0.0**

* First stable release
