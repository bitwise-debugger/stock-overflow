'use client'
export function ErrorHandler({ error, reset }) {
    console.log(error);
    return <main className="flex items-center justify-center w-screen h-screen">
        {error.message}
    </main>

}