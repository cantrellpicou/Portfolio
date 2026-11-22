import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.jsx";
import Footer from "../components/Footer.jsx";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />

      <main className="flex-1 text-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
