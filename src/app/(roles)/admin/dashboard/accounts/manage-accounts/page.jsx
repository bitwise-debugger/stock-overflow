import React from 'react'

export default async function ManageAccounts() {
    await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return (
    <div>ManageAccounts</div>
  )
}
