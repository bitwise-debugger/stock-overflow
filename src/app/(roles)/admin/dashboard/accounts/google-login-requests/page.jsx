import React from "react";

export default async function GoogleLoginRequests() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return <div>GoogleLoginRequests</div>;
}
