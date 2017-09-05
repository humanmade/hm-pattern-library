# Juniper

The Human Made Web Style Guide and Pattern Library. [Head over to the site to see it in action!](https://humanmade.github.io/hm-pattern-library/)

#### Maintained by:

* Matthew Haines-Young, @mattheu
* Samantha Miller, @sambulance
* Peter Wilson, @peterwilsoncc

### Usage Instructions

[Refer to the documentation for full usage instructions.](https://humanmade.github.io/hm-pattern-library/pages/instructions.html)

### Contributing and Development

#### Set up

Run these commands to get it running locally

1. `git clone --recursive git@github.com:humanmade/hm-pattern-library.git hm-pattern-library.dev`
1. `cd hm-pattern-library.dev`
1. If you do not have gulp installed on your machine, install it globally by running `npm install gulp-cli -g`
1. `npm install`
1. The sass and html can be compiled by running the command `gulp`.

The Human Made pattern library generates flat HTML and does not require a web server to be loaded. Once compiled, the HTML can be opened in your browser via the file system. You can simply access the compiled index file directly at `…/dist/index.html`

#### Workflow.

All local development should be done against master. `dist` which contains the compiled files is ignored from version control and must be created using the `gulp` task. Releases are just the content of `dist` and nothing else.

#### Creating a branch

All contributions should relate to an issues. If the issue does not exist, open an issue in the original repository, this will give your issue a number.

When creating a branch, name your branch `[issue-number]-short-summary`.

#### Submitting a pull request

Before submitting a pull request, you will need to confirm your sass meets our coding standards by running `gulp lint-sass`.

When you push your branch, you will be able to submit a pull request. Travis CI runs on the repository and will need to pass on all pull requests.

If Travis CI fails, you can push further commits to the branch to fix the build.

#### CSS Naming convention

This project follows the [BEM](http://getbem.com/) CSS naming convention.

#### Components

Sub-components are indicated with an `__`, variants with a `--`

* `block`
* `block__child`
* `block__child--variant`

In the styles/components directory, components should be placed in a file named for the component, `_component.scss`.

#### Utilities

Utilities are prefixed with `util-`, for example `util-clearfix`. A utility should be placed in the styles/utilities directory in a file named for the utility, `_clearfix.scss`.

#### Vendor files

Class names in vendor files should not be changed, the files should be placed in the styles/vendor directory and included as any other file would be included. These files do not need to meet our linting standards.

#### Adding a new Icons

* We need the icon file in SVG format. Ping babi if you need a new one as she can make sure they have consistent height and visual weight.
* The source svg file must have black fill. The gulp script will generate red and white icons by doing a search/replace for `fill="#000000"`
* Add the icon to this directory: [`src/images/icons/`](https://github.com/humanmade/hm-pattern-library/tree/master/src/images/icons)
* Add the icon to the list of icons in the [SCSS file](https://github.com/humanmade/hm-pattern-library/blob/master/src/styles/utilities/_icons.scss#L13).
* Add the icon to the list of icons in the [icons documentation HTML file](https://github.com/humanmade/hm-pattern-library/blob/master/src/html/pages/icons.html#L21).

## Changelog

**2.0.1**

* Mail icon.

**2.0**

* Big overhaul for the new HMN.MD design. Version 2.0 breaks backwards compatability with older versions.
* New: Labels, Pagination.
* Simplify, removing search and collapsable nav components, and associated JS>

**1.0.5**

* Labels & Tag cloud styles
* New alternate variant plus/minus icons. Removes need for 'beige' variations.
* New iconSrc helper function.
* Remove animations from nav to fix overflow hidden bug.
* New icon helper mixin. Also new lock and comment icons.
* Fix some bugs in tables
* Refactor links/buttons to break hard dependency.

**1.0.4**

* Use component colour variables with brand variables as defaults for easier customizing. Props @missjwo

**1.0.3**

* Better gulp tasks for icons and logos. Note if you are referencing logo file directly, you will need to update your paths.

**1.0.2**

* Add styles for WordPress galleries
* Make variables defaults

**1.0.1**

* Prevent images breaking out of container.

**1.0.0**

* First stable release
