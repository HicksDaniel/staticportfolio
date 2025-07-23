import React from "react";
import { Button } from "primereact/button";

export default function Introduction() {
  return (
    <div className="items-between flex h-full w-full justify-center gap-4">
      <div className="flex h-full w-3/4 flex-col items-start justify-between">
        <div>
          <h2 className="hidden-header">Welcome!</h2>
          <p className="pb-4 text-base font-light">
            Hi, I'm <b>Daniel Hicks</b> a software developer with strong focus
            on the user experience, animations and micro interactions.
          </p>
          <p className="pb-4 text-base font-light">
            Feel free to reach out to me if you have any projects in mind, or
            just to say hello.
          </p>
        </div>
        <div>
          <Button className="btn" icon="pi pi-github">
            {/* <a href="https://github.com/DanielEdgarHicks" /> */}
          </Button>
          <Button className="btn" icon="pi pi-linkedin">
            {/* <a href="https://www.linkedin.com/in/daniel-hicks-1000a019a/" /> */}
          </Button>
          <Button className="btn" icon="pi pi-link">
            {/* <a href="mailto:DanielEdgarHicks@gmail.com"/> */}
          </Button>

          <Button className="btn">Who Knows</Button>
        </div>
      </div>
      <img
        className="h-full w-1/4"
        src="https://images.unsplash.com/photo-1521434095289-4c29c71ba6d4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}
