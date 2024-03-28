Hello I'm  Dara Akhila
Now I will elucidate on the frontend project I received from the pioneer company as part of the recruitment process .
This is a single page application, 
Firstly let's look into how I created a side navigation bar. I used the react router drim Library for routing between different pages and implemented a responsive design to accommodate various screen sizes.
Technologies Used:
React.js
react-router-dom
CSS

Project Structure:
1. App Component:

Contains the main structure of the application.

Integrates the side navigation bar and the main content area.

2. SideNavBar Component:
Implemented using React class components.
Provides navigation links to different pages.
Utilizes the 'NavLink component from 'react-router-dom for routing.
Supports toggling functionality to expand/collapse the navigation bar.
Responsive design using CSS media queries to collapse into a hamburger menu on smaller screens

Pages Components:
Separate components for each page (Home, About, Contact).
Render the content for respective pages.
Serve as targets for navigation using React Router.

Implementation Steps:

1. Set up a new React.js project.
2. Install 'react-router-dom for routing functionality.
3. Create components for the side navigation bar, home, about, and contact pages.
4. Implement routing configuration in the main App component.
5. Style the side navigation bar and main content area using CSS.
6. Add responsiveness using CSS media queries.
7. Test the application on various screen sizes to ensure proper functionality.

In the screen sizes, above the 992px, the side navigation bar is collapsed into the icons (i.e, only the icons are displayed).
I have created additional pages to make side navigation bar visible accordingly. So, this is a brief explanation about side navigation bar.

Secondly, As a part of task 2, I created a graph of population data by installing chart.js library. I took population in millions on y axis and corresponding years on x axis. I have fetched the data from the provided (https://datausa.io/api/data?drilldowns=Nation&measures=Population) API using useEffect hook from react. 

Lastly, for task 3, I created crypto prices cards. I fetched data from the API provided (https://api.coindesk.com/v1/bpi/currentprice.json) using the useEffect method. The currencies I displayed here one us dollar, the second GBP which is the currency of the UK, the third is the currency of the European union.

So this is the brief explanation of my project. By this video, I hope you have got an idea how I built this single page application. Thank you for giving me an opportunity to showcase my skills.






Frontend Developer Intern Assessment

Task 1: Create a Side Navigation Bar

Objective: Implement a side navigation bar similar to the one highlighted in the provided image.

Requirements:
The navigation bar should be responsive and collapse into a hamburger menu on smaller screens.
Include at least three navigation items.
Highlight the active navigation item.

Evaluation Criteria:
Correct implementation of the navigation bar layout.
Responsiveness on different screen sizes.
Proper highlighting of active navigation items.

Task 2: Graph Population Data

Objective: Fetch population data from the provided API (https://datausa.io/api/data?drilldowns=Nation&measures=Population) and create a graph.

Requirements:
Utilize React JS and any relevant libraries (e.g., Chart.js) to create the graph.
Display the population data for different nations.
Provide appropriate labels, legends, and axis titles for the graph.

Evaluation Criteria:
Successful retrieval and display of population data.
Accuracy and clarity of the graph representation.
Proper labeling and styling of the graph components.

Task 3: Display Cryptocurrency Prices

Objective: Fetch cryptocurrency prices from the provided API (https://api.coindesk.com/v1/bpi/currentprice.json) and display them in cards.

Requirements:
Fetch data asynchronously using React's lifecycle methods or hooks.
Display prices of Bitcoin in multiple currencies (e.g., USD and Euro).
Design visually appealing cards to showcase the cryptocurrency prices.

Evaluation Criteria:
Proper integration and retrieval of cryptocurrency prices.
Clear presentation of prices in the card format.
Visual appeal and consistency in card design.
