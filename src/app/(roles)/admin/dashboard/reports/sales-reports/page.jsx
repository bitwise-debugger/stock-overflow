import React from "react";

export default async function SalesReports() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return <div>SalesReports</div>;
}
