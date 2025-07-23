import React from "react";

export default function Contact() {
  return (
    <div className="flex h-full flex-col justify-between text-sm font-light">
      <h2 className="text-base font-bold">Let's start working together!</h2>
      <div>
        <h2 className="hidden-header">Contact Details</h2>
        <p>DanielEdgarHicks@gmail.com</p>
        <p>USA</p>
      </div>
      <div>
        <div>
          <h2 className="hidden-header">Socials</h2>
          <ul>
            <li>Linkedin</li>
            <li>Github</li>
            <li>Medium</li>
            <li>Discord</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
