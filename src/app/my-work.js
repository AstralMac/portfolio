/**
 * Author: Malcolm Abdullah
 * Date: 12-20-24
 * File: my-work.js
 * Description: This code is used to generate a list of my past projects.
 * This code includes a series of unit tests to validate the code.
 */

"use strict";

// require statements
const http = require('http');
const url = require('url');

// array of my past projects.
const work = [
  {
    title:"Web-231",
    description:"",
    link:""
  },
  {
    title:"Web-330",
    description:"",
    link:""
  },
  {
    title:"Web-335",
    description:"",
    link:""
  },
  {
    title:"Web-340",
    description:"",
    link:""
  },
  {
    title:"Web-420",
    description:"",
    link:""
  },
  {
    title:"Web-425",
    description:"",
    link:""
  },
  {
    title:"BioSite",
    description:"",
    link:""
  },
];

// create a new server
const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true); // parse the URL
  const pathname = parseUrl.pathname; // get the path name

  // Set CORS headers to allow cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*'); // This allows all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed request methods
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  // To call this API, use the following URL:
  // http://localhost:3000/api/my-work
  // The API will return a list of my past projects titles and descriptions
  //
  // if the path is '/api/my-work' and the method is 'GET'
  if (pathname === '/api/my-work' && req.method === 'GET') {

    if (!factions) {
      // if the factions array is empty, return a 404 status code and the message 'Message lost in translation.'
      res.writeHead(404, { 'Content-Type': 'application/json' }); // set the response header
      res.end(JSON.stringify({ message: 'Message lost in translation.' })); // send the response
      return; // exit the function
    }

    // if the factions array is not empty, return it as a JSON response
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(work)); // send the response
  } else {
    // if the path is not '/api/work' or the method is not 'GET', return a 404 status code and the message 'Not found'
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found'); // send the response
  }
});

// start the server on port 3000 and log a message to the console
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

//////////////////////////// UNIT TESTS /////////////////////////////////
// Do not modify the code below this line.  They are used to test the implementation above.
// They are not required for the code to run correctly but are required to pass the tests.
// The tests will run automatically when the code is run after a 1-second delay.
// You do not need to understand the code below to complete this week's assignment.
//
// WARNING: If you modify the code below, the tests may not run correctly and the API's behavior may change.
// if this happens, you may not receive full credit for the assignment, because I will have no way to verify
// week 8's assignment requirements.
//////////////////////////// UNIT TESTS /////////////////////////////////
setTimeout(() => {
  const http = require('http');
  const assert = require('assert');

  function testFactionsList(callback) {
    http.get('http://localhost:3000/api/my-work', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        const work = JSON.parse(data);
        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(Array.isArray(work), true);
        assert.strictEqual(factions.length > 0, true);
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

  function testRunner() {
    let tests = [testFactionsList, testResponseHeaders, testContentTypeJson, testNotFound];
    let index = 0;

    function nextTest() {
      if (index < tests.length) {
        tests[index++](nextTest);
      } else {
        console.log('All tests passed!');
      }
    }

    nextTest();
  }

  setTimeout(testRunner, 1000);
}, 1000);
