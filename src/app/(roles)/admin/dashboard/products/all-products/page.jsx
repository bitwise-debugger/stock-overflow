import React from 'react'

export default async  function AllProducts() {
    await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return (
    <div>AllProducts</div>
  )
}
