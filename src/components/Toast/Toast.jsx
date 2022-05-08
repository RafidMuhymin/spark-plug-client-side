import "./Toast.css";

export default function Toast({ showToast, setShowToast }) {
  const handleCut = () => {
    setShowToast(false);
  };

  return (
    <div
      className={
        "fp-toast position-fixed top-0 end-0 p-3" +
        (showToast ? "" : " d-none")
      }
      style={{
        zIndex: "11",
      }}
    >
      <div role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">Sending Password Reset Mail</strong>
          <button
            onClick={handleCut}
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  );
}
