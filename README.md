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
import { BrowserRouter } from "react-router";
import App from "./app";

const root = document.getElementById("root");
//  wrap you component with Browser Router component
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

Done ✅ We have successfully integrate React Router with Our Application

---

📝 Note: **< BrowserRouter >** <br>
The BrowserRouter component is a part of the React Router library that uses the HTML5 history API to keep your UI in sync with the URL. It enables declarative routing in your React application, allowing you to define routes and navigate between different components seamlessly.

---

## Create Routing with React Router

Suppose We are building an application **🔎Dev Finder** with 3 routes (home, login, developers), you can structure your application as follows:

### Application Structure

```plaintext
src/
├── components/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Developers.jsx
│   └── NotFound.jsx
├── App.jsx
├── index.jsx
```

### Create Route Components

Create the following components in the `src/components/` directory:

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

Lets define our routes in `App.jsx` :

**App.jsx**

```jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Developers from "./components/Developers";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
```

### Render the Application

Ensure your `index.jsx` renders the `App` component wrapped with `BrowserRouter`:

**index.jsx**

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

With this structure, you have set up a React application with 4 routes: home, login, developers, and a fallback 404 page.

Done✅ We have set up a basic project with 3 + 1 ( default ) Routes

---

📝 Notes: Understand **Routes** and **Route** Component

- **Routes**: The `Routes` component is a container for all your route definitions. It ensures that only one route is rendered at a time, matching the current URL.
- **Route**: The `Route` component defines a mapping between a URL path and a component. It renders the specified component when the URL matches the path.
- **Route Path**: The `path` attribute in a `Route` component specifies the URL pattern that the route should match.
- **Route Element**: The `element` attribute in a `Route` component specifies the React component to render when the path matches.
- **Wildcard Route**: A route with a path of `*` acts as a catch-all for any unmatched routes, often used to display a 404 Not Found page.

---
