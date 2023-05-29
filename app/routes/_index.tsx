import type { V2_MetaFunction } from "@remix-run/cloudflare";
import Hero from "~/components/Hero";
import Experience from "~/components/Experience";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Himanshu's Portfolio" },
    { name: "description", content: "Welcome to Himanshu's portfolio!" },
  ];
};

export default function Index() {
  return (
    <>
      <Hero />
      <Experience />
    </>
  );
}
