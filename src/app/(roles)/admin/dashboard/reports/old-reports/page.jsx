import React from 'react'

export default async function OldReports() {
      await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return (
    <div>OldReports</div>
  )
}
