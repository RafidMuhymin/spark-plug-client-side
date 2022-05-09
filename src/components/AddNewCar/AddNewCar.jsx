import NewCarForm from "../../forms/NewCarForm/NewCarForm";

export default function AddNewCar() {
  return (
    <main
      className="mx-auto p-4"
      style={{
        maxWidth: "768px",
      }}
    >
      <h1 className="text-center mb-3">Add a New Car</h1>

      <NewCarForm />
    </main>
  );
}
