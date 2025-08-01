import { Button } from "primereact/button";
import {
  openGmailPopup,
  openMailto,
  openOutlookPopup,
} from "../libs/utils/MessagingUtils";

export const emailModalContent = () => {
  return (
    <div className="flex w-full self-center">
      <div className="flex w-full flex-col content-center gap-3 p-3 text-center">
        Outlook
        <Button
          className="btn w-3/4 self-center"
          icon="pi pi-envelope"
          onClick={() => {
            openOutlookPopup({
              to: "DanielEdgarHicks@gmail.com",
              subject: "Hello from your Portfolio",
              body: "Hello Daniel, I am writing to you from your portfolio. I am interested in your work and would like to discuss a potential project. Please let me know if you are available for a meeting. Thank you.",
            });
          }}
        />
      </div>
      <div className="flex w-full flex-col content-center gap-3 p-3 text-center">
        Your Default
        <Button
          className="btn w-3/4 self-center"
          icon="pi pi-question-circle"
          onClick={() => {
            openMailto({
              to: "DanielEdgarHicks@gmail.com",
              subject: "Hello from your Portfolio",
              body: "Hello Daniel, [Insert Compliments Here] ",
            });
          }}
        />
      </div>
      <div className="flex w-full flex-col content-center gap-3 p-3 text-center">
        Gmail
        <Button
          className="btn w-3/4 self-center"
          icon="pi pi-google"
          onClick={() => {
            openGmailPopup({
              to: "DanielEdgarHicks@gmail.com",
              subject: "Hello from your Portfolio",
              body: "Hello Daniel, [Insert Compliments Here] ",
            });
          }}
        />
      </div>
    </div>
  );
};
