const http = require("http")

const server = http.createServer((req, res) => {

  const route = req.url
  const method = req.method

  if (route === "/") {
    res.write('<html>')
    res.write('<head><title>Welcome</title></head>')
    res.write('<body><h1>Welcome to the basics<h1><form action="/create-user" method="post"><input type="text" name="username"><input type="submit" value="Submit"></form></body>')
    res.write('</html>')
  } else if (route === "/users") {
    res.write('<html>')
    res.write('<head><title>/Users</title></head>')
    res.write('<body><ul><li>Bob</li><li>Chris</li><li>Stephan</li><li>Henry</li></ul></body>')
    res.write('</html>')
  } else if (route === "/create-user" && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk);
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody)
    })

    res.statusCode = 302;
    res.setHeader('Location', '/')
    console.log(body)
  }
  return res.end()
})

server.listen(3000)