import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Himanshu's Portfolio" },
    { name: "description", content: "Welcome to Himanshu's portfolio!" },
  ];
};

export default function Index() {
  return (
    <>
      <p className='font-semibold text-3xl'>PORTFOLIO 2-0</p>
    </>
  );
}
