import React from 'react'

export default async function LowProducts() {
    await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return (
    <div>LowProducts</div>
  )
}
