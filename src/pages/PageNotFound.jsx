import PageNav from "../components/PageNav";

function PageNotFound() {
  return (
    <div>
      <PageNav />
      Error 404: Page Not Found
      <br />
      The page you are looking for does not exist.
      <br />
      Please check the URL or return to the homepage.
      <br />
      <a href="/">Go to Homepage</a>
      <br />
    </div>
  );
}

export default PageNotFound;
