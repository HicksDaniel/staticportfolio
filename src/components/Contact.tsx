import React from "react";

const contactDetails = {
  directContact: [
    {
      name: "Email Me!",
      value: "DanielEdgarHicks@gmail.com",
    },
    {
      name: "Text Me!",
      value: "317-437-1432",
    },
  ],
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/danielehicks/",
    },
    {
      name: "GitHub",
      url: "https://github.com/HicksDaniel",
    },
    {
      name: "Medium",
      url: "https://medium.com/@DanielEdgarHicks",
    },
    {
      name: "Discord",
      value: "Daniel#1234",
    },
  ],
};

export default function Contact() {
  return (
    <div className="flex h-full flex-col justify-between text-sm font-light">
      <h2 className="text-base font-bold">Let's start working together!</h2>
      <div>
        <h2 className="hidden-header">Contact Details</h2>
        {contactDetails.directContact.map((item) => (
          <div
            onClick={() => {
              window.location.href = `mailto:${item.value}`;
            }}
            key={item.name}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div>
        <div className="w-1/3">
          <h2 className="hidden-header">Socials</h2>
          {contactDetails.socialMedia.map((item) => (
            <div
              className="cursor-pointer"
              key={item.name}
              onClick={() => {
                window.open(item.url, "_blank");
              }}
            >
              {item.name}
            </div>
          ))}
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
