import React from "react";
import GridCard from "./GridCard";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Designs() {
  const navigate = useNavigate();

  return (
    <div className="flex h-1/2 w-screen max-w-lg grid-cols-2 flex-col content-evenly items-center justify-evenly gap-4">
      <Button
        className="btn gap-2"
        label=""
        icon="pi pi-arrow-left"
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
      <GridCard>Design Page</GridCard>
      <GridCard>Page is Under Construction...</GridCard>
    </div>
  );
}
