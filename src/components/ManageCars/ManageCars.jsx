import NewCarForm from "../../forms/NewCarForm/NewCarForm";
import Cars from "../Cars/Cars";

export default function ManageCars() {
  return (
    <main className="bg-dark p-4 text-white">
      <h1 className="text-center">Manage Cars</h1>

      <Cars fromManageCarsPage={true} />

      <h2 className="text-center">Or..</h2>

      <div
        className="mx-auto"
        style={{
          maxWidth: "768px",
        }}
      >
        <NewCarForm />
      </div>
    </main>
  );
}
