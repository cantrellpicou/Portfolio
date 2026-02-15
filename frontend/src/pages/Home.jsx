import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.jsx";
import Hello from "../components/HelloSection.jsx";

function HomePage() {
  return (
    <div className="h-auto">
      <Hello />
      My home page.
    </div>
  );
}

export default HomePage;
