# Juniper

The Human Made Web Style Guide and Pattern Library. [Head over to humanmade.github.io/hm-pattern-library to see it in action!](https://humanmade.github.io/hm-pattern-library/)

#### Maintained by:

* Matthew Haines-Young, @mattheu
* Samantha Miller, @sambulance

### Usage Instructions

[Refer to the documentation for full usage instructions.](https://humanmade.github.io/hm-pattern-library/pages/instructions.html)

### Contributing and Development

PRs merged to the `main` branch will be automatically built using CircleCI. Generated assets will be pushed to a `main-built` branch by the CI deploy task, and the `/dist/` folder from this build will be pushed to the `gh-pages` branch.

The `gh-pages` branch is the release branch for this project. Release tags should only be created on `gh-pages`.

#### Set up

Run these commands to get it running locally

1. `git clone git@github.com:humanmade/hm-pattern-library.git hm-pattern-library`
1. `cd hm-pattern-library`
2. `nvm use` to select the project's required node version using [nvm](https://github.com/nvm-sh/nvm)
4. `npm install`
5. The sass and html can be compiled by running the command `npm run build`.

The Human Made pattern library generates flat HTML and does not require a web server to be loaded. Once compiled, the HTML can be opened in your browser via the file system. You can simply access the compiled index file directly at `…/dist/index.html`

#### Workflow.

All local development should be done against the `main` branch. `dist` (which contains the compiled files) is ignored from version control and must be created using the `gulp` task. Releases are just the content of `dist` and nothing else.

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
* Add the icon to this directory: [`src/images/icons/`](https://github.com/humanmade/hm-pattern-library/tree/main/src/images/icons)
* Add the icon to the list of icons in the [SCSS file](https://github.com/humanmade/hm-pattern-library/blob/main/src/styles/utilities/_icons.scss#L13).
* Add the icon to the list of icons in the [icons documentation HTML file](https://github.com/humanmade/hm-pattern-library/blob/main/src/html/pages/icons.html#L21).

## Changelog

**2.1.0**

* Updated typography styles

**2.0.3**

* Compatability with Node 16 and M1 Macs.

**2.0.2**

* Update npm dev dependencies to fix vulnerabilities
* Compatability with Gulp 4

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
