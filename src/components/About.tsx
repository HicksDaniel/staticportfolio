import React, { PureComponent } from "react";

export default function About() {
  return (
    <div className="flex items-start text-sm">
      <div className="flex flex-col justify-start gap-4 text-sm font-light">
        <h2 className="hidden-header">About me</h2>
        <div>
          <p>
            Hi, Daniel Hicks, a front-end software developer from Indianapolis.
          </p>
          <br />
          My primary tools of choice includes:
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Nodejs</li>
            <li>Vite</li>
          </ul>
        </div>

        <p>
          Beyond coding, I am passionate about design, 3d modeling, computer
          hardware, and traveling. I am always looking for new things to learn
          and explore.
        </p>
      </div>
    </div>
  );
}
