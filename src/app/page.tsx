import { Dialog } from "@/components/dialog";
import { supabase } from "@/helpers/supabase";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { data: posts, error } = await supabase.from("posts").select("*");

  console.log(posts);

  return (
    <>
      <main className="mx-auto flex h-full max-w-3xl flex-col px-4 py-6">
        <div className="w-full flex justify-between items-start">
          <h1 className="text-2xl font-medium">Notes List</h1>
          <Link
            href="?create=true"
            className="py-2 px-4 border border-green-600 rounded text-green-600 text-sm"
          >
            Add New
          </Link>
        </div>

        <div>
          {posts?.map(post => (
            <li key={post.id}>{post.name}</li>
          ))}
        </div>
      </main>

      <Dialog />
    </>
  );
}
