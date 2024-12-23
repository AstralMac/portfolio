"use strict";

// Import required modules
const express = require("express");
const cors = require("cors");

// Create an Express app
const app = express();

// Allow CORS for GitHub Pages domain
app.use(cors({
  origin: 'https://astralmac.github.io',  // Adjust this to the domain you're deploying from
}));

// Define the work data
const work = [
  {
    title: "Web-231",
    description: "Assignments & Projects for Enterprise JavaScript I",
    link: "https://github.com/AstralMac/web-231",
  },
  {
    title: "Web-330",
    description: "Enterprise JavaScript II",
    link: "https://github.com/AstralMac/Web-330",
  },
  {
    title: "Web-335",
    description: "WEB335-J310 Introduction to NoSQL (2247-DD)",
    link: "https://github.com/AstralMac/web-335",
  },
  {
    title: "Web-340",
    description: "Node.js",
    link: "https://github.com/AstralMac/web-340",
  },
  {
    title: "Web-420",
    description: "WEB420-J310 RESTFul APIs (2247-DD)",
    link: "https://github.com/AstralMac/web-420",
  },
  {
    title: "Web-425",
    description: "Angular with TypeScript",
    link: "https://github.com/AstralMac/web-425",
  },
  {
    title: "BioSite",
    description: "Fundamentals of Web Development",
    link: "https://github.com/AstralMac/BioSite",
  },
];

// Define your route to respond with work data
app.get('/api/my-work', (req, res) => {
  // Send the 'work' data as JSON response
  res.status(200).json(work);
});

// Handle 404 errors for other routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
