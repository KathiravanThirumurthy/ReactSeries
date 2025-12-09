###
Command 1:
npm create vite@latest

This command only starts the Vite project creation tool.

After running it, Vite will ask questions step-by-step:

✔ Project name: » (you must type name)
✔ Select a framework: » (React, Vue, etc…)
✔ Select a variant: » (React + JS or React + TS)

###
npm create vite@latest class1 -- --template react

Here you are giving all answers in one line:

###
Inside package.json you will see:
{
  "name": "class1"
}
So package name = your project identity for npm.

###
Why is package name important?

Because npm treats every project like a package that can be:

installed

published

shared

versioned
###
| Folder/File  | Purpose                             |
| ------------ | ----------------------------------- |
| `src/`       | Main code files                     |
| `App.jsx`    | Main UI component                   |
| `main.jsx`   | Entry point — connects React to DOM |
| `index.html` | Root HTML file                      |

####

What is JSX? (5 mins)

A syntax that lets us write HTML inside JavaScript

Browser can't understand JSX → compiled to JS by Babel

Example:

<h1>Hello World</h1>

###
run the project
npm run dev


