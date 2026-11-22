import MainNavigation from "./MainNavigation.jsx";
import Footer from "../components/Footer.jsx";

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      <main className="m-8 text-center w-105 mr-auto ml-auto text-[40px] flex-1">
        <h1>An error occured!</h1>
        <p>Could not find this page!</p>
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage;
