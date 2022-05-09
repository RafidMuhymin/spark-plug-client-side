import Cars from "../Cars/Cars";

export default function ManageCars() {
  return (
    <main className="bg-dark">
      <Cars fromManageCarsPage={true} />
    </main>
  );
}
