"use client";
import { usePathname } from "next/navigation";
import Cardpage from "@/app/cardpage/page";

const Post = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {/* <h1>{pathname}</h1> */}
      <Cardpage />
    </div>
  );
};

export default Post;
