"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import Sidebar from "@/app/Sidebar/sidebar";
import Topbar from "@/app/Topbar/Topbar";

export default function Layout({ children }) {
  const [isOpenSidbar, setIsOpenSidebar] = useState(true);

  return (
    <>
      <AuthProvider>
        {/* <div> */}
        {/* <Sidebar isOpen={isOpenSidbar} onToggleOpen={setIsOpenSidebar} /> */}
        {/* <main> */}
        {/* <Topbar onToggleSidebar={() => setIsOpenSidebar((is) => !is)} /> */}
        <div className="dashboard">{children}</div>
        {/* </main> */}
        {/* </div> */}
      </AuthProvider>
    </>
  );
}
