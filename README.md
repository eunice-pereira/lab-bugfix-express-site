# (broken) express app :(

This express app has 3 pages, viewable in the browser:

- `/` home page with inspirational graphic
- `/hello` page that just shows "Hello!"
- `/hello/<name>` page that will show "Hello, <name>!" (allowing you to put in anything after the "/hello/")

# Bugs

- [x] All pages show "Page not found"

Moved 'catch all' error function to bottom of script

```
app.get('*', (req, res) => {
	res.status(404).send(`
      <h1>Page not found</h1>
    `);
});
```

- [x] `/hello` route causes an error

Modified response to res.send to properly handle page request:

```
app.get('/hello', (req, res) => {
	res.send('Hello!');
});
```

- [x] `/hello/world` shows text "Hello, {whom}!" instead of "Hello, world!"

Modififed template literal syntax to display string:

```
app.get('/hello/:whom', (req, res) => {
	const whom = req.params.whom;
	res.send(`Hello, ${whom}!`);
});
```

# For the more curious

- Return HTML strings for the `/hello` routes.
- On the `/hello` page, create a list (using `<li>`) of `<a>` tags that go to `/hello/name1`, `/hello/name2`, and `/hello/name3`
  - (Substitute in three real names, of course)

```
app.get('/hello', (req, res) => {
	res.send(`
    <h2>Well, hello there dog lover! 😍</h2>
    <h3>Pick a name: 🐶</h3>
    <li><a href="/hello/Bella">Bella</a></li>
    <li><a href="/hello/Diamond">Diamond</a></li>
    <li><a href="/hello/Trey">Trey</a></li>
    `);
});
```
