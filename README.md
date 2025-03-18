# React Router _V7.3.0_

React Router is a powerful routing library for React applications. The latest version, _V7.3.0_

For more details, refer to the [official documentation](https://reactrouter.com/).

## Let's understand the Concept of Routing

Routing is the process of determining how an application responds to a client request to a particular endpoint, which is a URI (or path) . In the context of React applications, routing allows you to navigate between different components or views, enabling a single-page application (SPA) experience. React Router provides a declarative way to define routes and manage navigation, making it easier to build dynamic and responsive web applications.

## Let's Start React Router

1. Go to the [official documentation](https://reactrouter.com/) > Docs
2. You will see 3 Mode.
   - Declarative Mode
   - Data Mode
   - Framework Mode

---

You have to choose your mode based on how will you use react-router. We suggest you to read the complete overview of each mode from this link https://reactrouter.com/start/modes

---

We also suggest you to Open the following link.it will help you to undeerstand the function and component of react-router > https://api.reactrouter.com/v7/modules/react_router.html

# Explore React Router ( Declarative Mode)

⚠️ I Hope that you allready read the [docs](https://reactrouter.com/start/modes) for picking a mode

if you need basic routing features like

- Simply navigating around the app
- Routes based simple component rendering with \< Link >, useNavigate, and useLocation
- matching URLs to components then render using **Outlet** , _useParams()_

Then the declarative mode will be great choice for you. if you came here to learn **react-router** then starting with declarative mode will be a great choice.

## Install React Router ( Declarative Mode )

```bash
React Router v7 requires the following minimum versions:

- node@20
- react@18
- react-dom@18
# upgrade your node version , react version , react-dom version if you dont have this set up
```

Install a React Project using vite

```bash
npx create-vite@latest
```

Next install React Router from npm:

```bash
npm i react-router
```

Finally, render a **< BrowserRouter>** around your application:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router";
import App from "./app";

const root = document.getElementById("root");
//  wrap you component with Browser Router component
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" elements={<App/>}>
    <Routes>
  </BrowserRouter>
);
```

Done ✅ We have successfully integrate React Router with Our Application
.The **path** define in which url your App component will show. <br>

👉 Try different paths😀 for your application <br>
👉 Explore how component rendering in the written path <br>

---

📝 Note: **< BrowserRouter >** <br>
The BrowserRouter component is a part of the React Router library that uses the HTML5 history API to keep your UI in sync with the URL. It enables declarative routing in your React application, allowing you to define routes and navigate between different components seamlessly.

---

📝 Note: **< Routes >** <br>
The `Routes` component is a container for all your route definitions. It ensures that only one route is rendered at a time, matching the current URL.

---

📝 Note: **< Route >** <br>

The `Route` component defines a mapping between a URL path and a component. It renders the specified component when the URL matches the path.

- **Route Path**: The `path` attribute in a `Route` component specifies the URL pattern that the route should match.
- **Route Element**: The `element` attribute in a `Route` component specifies the React component to render when the path matches.

---

## Routing with React Router (Declarative mode)

Suppose We are building an application **🔎Developer-Book** with 3 page (home, developers , login ), you can structure your application as follows:

### Application Structure

```plaintext
src/
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Developers.jsx
│   └── NotFound.jsx
├── App.jsx
├── main.jsx
```

### Create Route Components

Create the following components in the `src/pages/` directory:

**Home.jsx**

```jsx
import React from "react";

const Home = () => {
  return <h1>Home Page</h1>;
};

export default Home;
```

**Login.jsx**

```jsx
import React from "react";

const Login = () => {
  return <h1>Login Page</h1>;
};

export default Login;
```

**Developers.jsx**

```jsx
import React from "react";

const Developers = () => {
  return <h1>Developers Page</h1>;
};

export default Developers;
```

**NotFound.jsx**

```jsx
import React from "react";

const NotFound = () => {
  return <h1>404 - Not Found</h1>;
};

export default NotFound;
```

### Define Routes

Lets define our routes in `main.jsx` :

**App.jsx**

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import "animate.css";
import Home from "./pages/Home.jsx";
import Developers from "./pages/Developers.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/developers" element={<Developers></Developers>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
```

### Let's see how renders working

- if you go to "/" , The `Home.jsx` will render
- if you go to "/developers" , The `Developers.jsx` will render
- if you go to "/login" , The `Login.jsx` will render
- if you go to "Any Other routes" , The `NotFound.jsx` will render

---

📝 Notes: Understand **splat Path** in **Route** Component

- splat path with a path of `*` acts as a catch-all for any unmatched routes, often used to display a 404 Not Found page.

---

### Navigate ROutes

To navigate between routes in your application, you can use the `Link` component from React Router. The `Link` component allows you to create navigational links that enable users to move between different routes without reloading the page.

### Let's create a Simple Navbar

Here's how you can use the `Link` component to navigate between routes:

```jsx
import { Link } from "react-router";

const Navigation = () => {
  return (
    <nav className="">
      <h2 className="text-center">Developers Book</h2>
      <ul className="flex justify-center space-x-4 border-b-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/developers">Developers</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
```

In this example, the `Link` component is used to create links to the Home, Developers, and Login pages. When a user clicks on one of these links, React Router will navigate to the corresponding route without reloading the page.

---

### Now Add this Component in All your pages

**Home.jsx**

```jsx
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <h2>Welcome to Home</h2>
    </div>
  );
};

export default Home;
```

**Login.jsx**

```jsx
import Navigation from "../components/Navigation";

const Login = () => {
  return (
    <div>
      <Navigation></Navigation>
      Welcome to Login Page
    </div>
  );
};

export default Login;
```

**Developers.jsx**

```jsx
import Navigation from "../components/Navigation";

const Developers = () => {
  return (
    <div>
      <Navigation></Navigation>
      Welcome to Developers Page
    </div>
  );
};

export default Developers;
```

**NotFound.jsx**

```jsx
import Navigation from "../components/Navigation";

const NotFound = () => {
  return (
    <div>
      <Navigation></Navigation>
      NotFound-404
    </div>
  );
};

export default NotFound;
```

- Now You will see the Navigation in all pages
- By Clicking any navmenu , you can render different pages with out reload
- If you want to go any unmatched routes you will see Not Found Page

## Nested Routing

Previously we have use Navbar in All Components. When Url changes the Navbar are re-rendering. Let's explore it by redifining a function on Navigation

```jsx
import { Link } from "react-router";

const Navigation = () => {
  function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256); // Random value between 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b} ,.3)`;
  }

  return (
    <nav style={{ backgroundColor: getRandomRGBColor() }}>
      <h2 className="text-center">Developers Book</h2>
      <ul className="flex justify-center space-x-4 border-b-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/developers">Developers</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
```

Now if you traverse all your routes , you will see that on each traversal Navbar will change its background.

### How To Solve This ??

You can solve this by nesting your routes. By nesting routes We can show a component / pages inside another components. Let's Explore with following code changes

**App.jsx** <br>
redifine your App.jsx like this. We will understand later what is happening here .

```jsx
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <p className="text-center text-sm">
          Welcome to APP. I will render my child based on URL here.
        </p>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
```

**main.jsx** <br>

In main.jsx,

- define a default route `(/)` for rendering `App.jsx`
- Paste All your routes inside this route

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import "animate.css";
import Home from "./pages/Home.jsx";
import Developers from "./pages/Developers.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          {/* //here is my childs 👶 */}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/developers" element={<Developers></Developers>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
```

- You will now see multiple navigation bars on your screen.
- Remove the navigation bar from all your pages.
- The navigation bar will remain static inside the App component, while the pages will render within the Outlet.
