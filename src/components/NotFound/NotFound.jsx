export default function NotFound() {
  return (
    <main
      className="mx-auto"
      style={{
        maxWidth: "768px",
      }}
    >
      <h1 className="m-4 mb-0 text-center">
        Oops... It seems the page you requested does not exist!
      </h1>

      <img src="/404.svg" alt="404 Not Found" className="img-fluid" />
    </main>
  );
}
