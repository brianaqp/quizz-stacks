"use client";

import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();
  return (
    <div className="w-[400px] text-center mx-auto mt-[25%]">
      <h1 className="text-xl">Error</h1>
      <p>There was an error loading the result data. Please try again later.</p>
      <button
        className="border-2 px-2 rounded-md mt-2"
        onClick={() => {
          router.push("/");
        }}
      >
        Go home
      </button>
    </div>
  );
}
