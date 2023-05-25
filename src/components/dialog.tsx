"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { submit } from "./dialog.actions";

export const Dialog = () => {
  const router = useRouter();
  const search = useSearchParams();

  const show = search.get("create") === "true";

  return show ? (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/10 backdrop-blur-[2px]">
      <div className="bg-zinc-800 rounded-md py-6 px-4">
        <h1 className="text-2xl font-medium mb-4">Create Note</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            await submit(formData);
            router.replace("/");
          }}
          className="flex flex-col gap-4"
        >
          <textarea
            placeholder="Content"
            name="note"
            className="border border-gray-300 rounded px-4 py-2 text-zinc-800 w-[300px]"
          />
          <button
            type="submit"
            className="border border-green-600 rounded text-green-600 text-sm px-4 py-2"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  ) : null;
};
