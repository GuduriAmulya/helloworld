const http = require('http');

// Get the port from command line arguments or default to 3001
const port = 3002;

const requestHandler = (req, res) => {
    res.end(`Hello World! Server is listening on port ${port}`);
};

const server = http.createServer(requestHandler);

// Start the server and listen on the specified port
server.listen(port, (err) => {
    if (err) {
        return console.log('Something went wrong:', err);
    }
    console.log(`Hello World! Server is listening on port ${port}`);
});
/*
### Instructions to Run:

1. Save this code into a file called `server.js`.
2. Open your terminal or command prompt.
3. Run the server with a specified port number. For example:

   ```bash
   node server.js 8080
   ```

   This will start the server on port `8080`.

4. If you don't specify a port number, it will default to `3000`:

   ```bash
   node server.js
   ```

   This will start the server on port `3001`.

   */