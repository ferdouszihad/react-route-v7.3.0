import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <header>
        <Navigation></Navigation>
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
