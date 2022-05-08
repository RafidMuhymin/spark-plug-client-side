import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="p-5 d-flex flex-grow-1 justify-content-center align-items-center">
      <div role="status" className="spinner-grow text-primary">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
