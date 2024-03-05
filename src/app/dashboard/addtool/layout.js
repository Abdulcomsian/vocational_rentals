"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import Sidebar from "@/app/Sidebar/sidebar";
import Topbar from "@/app/Topbar/Topbar";
import { CatagoriesProvider } from "@/contexts/CatagoriesContext";

export default function Layout({ children }) {
  const [isOpenSidbar, setIsOpenSidebar] = useState(true);

  return (
    <>
      <CatagoriesProvider>
        <AuthProvider>
          {/* <div> */}
          {/* <Sidebar isOpen={isOpenSidbar} onToggleOpen={setIsOpenSidebar} /> */}
          {/* <main> */}
          {/* <Topbar onToggleSidebar={() => setIsOpenSidebar((is) => !is)} /> */}
          <div className="dashboard">{children}</div>
          {/* </main> */}
          {/* </div> */}
        </AuthProvider>
      </CatagoriesProvider>
    </>
  );
}
