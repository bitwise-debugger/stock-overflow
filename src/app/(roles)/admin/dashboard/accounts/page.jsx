import React from "react";

export default async function Accounts() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return <div>Accounts</div>;
}
