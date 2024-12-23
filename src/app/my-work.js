/**
 * Author: Malcolm Abdullah
 * Date: 12-20-24
 * File: my-work.js
 * Description: This code generates a list of past projects and includes unit tests for validation.
 */

"use strict";

// require statements
const http = require('http');
const url = require('url');

// array of my past projects.
const work = [
  {
    title: "Web-231",
    description: "Assignments & Projects for Enterprise JavaScript I",
    link: "https://github.com/AstralMac/web-231"
  },
  {
    title: "Web-330",
    description: "Enterprise JavaScript II",
    link: "https://github.com/AstralMac/Web-330"
  },
  {
    title: "Web-335",
    description: "WEB335-J310 Introduction to NoSQL (2247-DD)",
    link: "https://github.com/AstralMac/web-335"
  },
  {
    title: "Web-340",
    description: "Node.js",
    link: "https://github.com/AstralMac/web-340"
  },
  {
    title: "Web-420",
    description: "WEB420-J310 RESTFul APIs (2247-DD)",
    link: "https://github.com/AstralMac/web-420"
  },
  {
    title: "Web-425",
    description: "Angular with TypeScript",
    link: "https://github.com/AstralMac/web-425"
  },
  {
    title: "BioSite",
    description: "Fundamentals of Web Development",
    link: "https://github.com/AstralMac/BioSite"
  }
];

// create a new server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Set CORS headers to allow cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  // Route: /api/my-work
  if (pathname === '/api/my-work' && req.method === 'GET') {
    if (work.length === 0) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'No projects found.' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(work));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// start the server on port 3000 and log a message to the console
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

//////////////////////////// UNIT TESTS /////////////////////////////////
setTimeout(() => {
  const assert = require('assert');

  function testProjectsList(callback) {
    http.get('http://localhost:3000/api/my-work', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        const projects = JSON.parse(data);
        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(Array.isArray(projects), true);
        assert.strictEqual(projects.length > 0, true);
        callback();
      });
    });
  }

  function testResponseHeaders(callback) {
    http.get('http://localhost:3000/api/my-work', (res) => {
      assert.strictEqual(res.headers['access-control-allow-origin'], '*');
      assert.strictEqual(res.headers['access-control-allow-methods'], 'GET, POST, OPTIONS');
      callback();
    });
  }

  function testContentTypeJson(callback) {
    http.get('http://localhost:3000/api/my-work', (res) => {
      assert.strictEqual(res.headers['content-type'], 'application/json');
      callback();
    });
  }

  function testNotFound(callback) {
    http.get('http://localhost:3000/api/non-existing-route', (res) => {
      assert.strictEqual(res.statusCode, 404);
      callback();
    });
  }

  function runTests() {
    const tests = [testProjectsList, testResponseHeaders, testContentTypeJson, testNotFound];
    let index = 0;

    function next() {
      if (index < tests.length) {
        tests[index++](next);
      } else {
        console.log('All tests passed!');
      }
    }

    next();
  }

  runTests();
}, 1000);
