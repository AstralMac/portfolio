// server.js

"use strict";

// Import required modules
const http = require("http");
const url = require("url");

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

// Create a server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (pathname === "/api/my-work" && req.method === "GET") {
    // Respond with work data
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(work));
  } else {
    // Handle 404 errors
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
