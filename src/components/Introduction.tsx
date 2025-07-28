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
        className="h-4/4 max-h-[450px] rounded-2xl border-2 border-solid border-[color:var(--color-primary)]"
        src="/2019-peru-cusco-ai-filter.png"
      />
    </div>
  );
}
