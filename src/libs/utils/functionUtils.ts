import type { EmailModalContentProps } from "../types.ts";

export function openGmailPopup({ to, subject, body }: EmailModalContentProps) {
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(url, "_blank", "width=600,height=600,top=100,left=100");
}

export function openMailto({ to, subject, body }: EmailModalContentProps) {
  const mailtoLink = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

export function openOutlookPopup({
  to,
  subject,
  body,
}: EmailModalContentProps) {
  const url = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(url, "_blank", "width=600,height=600,top=100,left=100");
}
