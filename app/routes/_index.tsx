import type { V2_MetaFunction } from "@remix-run/cloudflare";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Himanshu's Portfolio" },
    { name: "description", content: "Welcome to Himanshu's portfolio!" },
  ];
};

export default function Index() {
  return (
    <main className='container max-w-6xl px-4'>
      <Navbar />
      <Footer />
    </main>
  );
}
