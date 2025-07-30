import GridCard from "./GridCard";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Playground() {
  const navigate = useNavigate();

  return (
    <div className="flex h-1/2 w-screen max-w-lg grid-cols-2 flex-col content-evenly items-center justify-evenly gap-4">
      <Button
        className="btn animate-fade-in-up gap-2"
        label=""
        icon="pi pi-arrow-left"
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
      <GridCard index={1}>Playground Page</GridCard>
      <GridCard index={2}>
        This will be a place I will be sharing interactive elements I'm working
        on.
      </GridCard>
      <GridCard index={3}>Page is Under Construction...</GridCard>
    </div>
  );
}
