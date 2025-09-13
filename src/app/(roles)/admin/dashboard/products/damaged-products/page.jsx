import React from "react";

export default async function DamagedProducts() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return <div>DamagedProducts</div>;
}
