import MainNavigation from "./MainNavigation.jsx";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main className="m-8 text-center">
        <h1>An error occured!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
