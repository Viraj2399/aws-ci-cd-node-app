const http = require("http");
const app = require("../src/index"); // import the app

// Start the server programmatically
const server = app.listen(3000, () => {
  console.log("Test server running on port 3000");

  // Make request to /health
  http.get("http://localhost:3000/health", (res) => {
    console.log("Status code:", res.statusCode);

    // Stop server after test
    server.close();

    // Exit process with 0 if OK, 1 otherwise
    process.exit(res.statusCode === 200 ? 0 : 1);
  }).on("error", (err) => {
    console.error("Request failed:", err.message);
    server.close();
    process.exit(1);
  });
});
