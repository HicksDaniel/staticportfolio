import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { emailModalContent } from "./EmailModalContent";

export default function Introduction() {
  const [toggled, setToggled] = useState(false);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setToggled(!toggled);

    setHasBeenHovered(true);
  };

  return (
    <div className="items-between flex h-full w-full justify-center gap-4">
      <div className="flex h-full w-3/4 flex-col items-start justify-between">
        <div>
          <h2 className="hidden-header">Welcome!</h2>
          <p className="pb-4 text-base font-light">
            Hi, I'm <b>Daniel Hicks</b>, a software developer with a strong
            focus on the user experience, animations, and micro interactions.
          </p>
          <p className="pb-4 text-base font-light">
            Feel free to reach out to me if you have any projects in mind, or
            just to say hello.
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly gap-2 md:w-3/4">
          <Button
            className="btn"
            icon="pi pi-github"
            onClick={() => {
              window.open("https://github.com/HicksDaniel", "_blank");
            }}
          />
          <Button
            className="btn"
            icon="pi pi-linkedin"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/danielehicks/",
                "_blank",
              );
            }}
          />
          <Button
            className="btn"
            icon="pi pi-envelope"
            onClick={() => {
              setVisible(true);
            }}
          />
          <Dialog
            className={`modal ${
              visible ? "animate-fade-in-up" : "animate-fade-out-down"
            }`}
            header=""
            content={emailModalContent}
            visible={visible}
            onHide={() => {
              if (!visible) return;
              setVisible(false);
            }}
          />

          <Button
            className="btn"
            onClick={() =>
              alert("I just felt I needed a 4th button here. Don't you agree?")
            }
          >
            Who Knows
          </Button>
        </div>
      </div>

      <div
        className="relative h-full max-h-[450px] w-[300px] rounded-2xl border-3 border-solid border-[color:var(--color-primary)] p-0"
        onMouseEnter={handleMouseEnter}
      >
        <img
          src="2019-peru-cusco-irl.png"
          className="h-full w-full rounded-2xl object-cover"
        />
        <img
          src="2019-peru-cusco-ai-filter.png"
          className={`absolute inset-0 h-full w-full rounded-2xl object-cover ${
            hasBeenHovered ? (toggled ? "radial-reset" : "radial-reveal") : ""
          }`}
        />
      </div>
    </div>
  );
}
