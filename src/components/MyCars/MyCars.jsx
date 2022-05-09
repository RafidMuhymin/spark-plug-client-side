import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Cars from "../Cars/Cars";

export default function MyCars() {
  const navigate = useNavigate();

  const navigateToAddNewCarPage = () => {
    navigate("/add-new-car");
  };

  return (
    <main className="bg-dark p-4 text-white">
      <div className="d-flex flex-column flex-sm-row gap-2 pb-2 justify-content-between align-items-center">
        <h1 className="text-center">My Cars</h1>

        <button
          onClick={navigateToAddNewCarPage}
          className="px-5 py-2 btn btn-primary d-block"
        >
          <span className="d-inline-flex gap-2 justify-content-center align-items-center">
            Add a New Car <Icon icon="akar-icons:plus" />
          </span>
        </button>
      </div>

      <Cars fromMyCarsPage={true} />
    </main>
  );
}
