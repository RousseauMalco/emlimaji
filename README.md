# GroupMate
Make happy teams for your classrooms with ease.

# About the Project
This is an app to help teachers and anyone who needs to form groups to make teams that will work well together and minimize conflicts. It takes in a CSV file that can be created from our linked Google Form and once the "Make  randomly sorts people into groups based on parameters such as the number of people you want in a group and the preferences of the people in the class. The app also has the functionality to freeze members in specific groups if you're happy with certain team placements. We have included a template for a Google Form that you can send to students to fill out, export the resulting CSV and it will be compatible with our app. 

![image](https://github.com/RousseauMalco/emlimaji/assets/84419638/a0ea4bc2-2987-404b-9bbc-63b955a3d2ca)
![image](https://github.com/RousseauMalco/emlimaji/assets/84419638/9892748e-22e8-4cc8-9da8-f159b643c4d6)

# Technologies
### Frameworks
* [Node.js](https://nodejs.org/en/)

### Library
* [React](https://react.dev/learn/installation)
* [PapaParse](https://www.papaparse.com/)
* [Tailwind](https://tailwindcss.com/docs/installation)
* [Material Tailwind](https://www.material-tailwind.com/docs/react/installation)
  
# Getting Started
### First, make sure you've...
1. Downloaded VS Code
2. Downloaded Node.js
3. Download the latest package manager npm: in your terminal, 'type npm install npm@latest -g'
   
### Installation
1. Clone this repository: 'https://github.com/RousseauMalco/emlimaji.git'
2. Run 'npm install' from the terminal to install all the project dependencies
3. You're good to go! 
   
### Starting our app
1. Open up the terminal of VS Code
2. type 'npm start' in your terminal
3. Open your browser, our project will automatically popup as a tab once the app compiles in VS Code

# Future Work 
1. Optimizing by skills to create teams balanced in terms of interests 
2. Functionality to save the final team configuration
    
# Known Issues
* Too much emphasis on students’ preferences, only Yes or No 
* No balancing between different types of people, no way to tell personality
* Some familiarity with Google Forms goes a long way in ease of use
* If the user specifies a number of groups that cannot be evenly distributed into, that number of groups will be generated, but there may be empty groups
* Not well suited for phone screens
* Items are left justified when you manually resize the screen
