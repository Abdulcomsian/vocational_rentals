"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import Sidebar from "@/app/Sidebar/sidebar";
import Topbar from "@/app/Topbar/Topbar";
import { CatagoriesProvider } from "@/contexts/CatagoriesContext";
import { PlansProvider } from "@/contexts/plansContext";

export default function Layout({ children }) {
  const [isOpenSidbar, setIsOpenSidebar] = useState(true);

  return (
    <>
      <CatagoriesProvider>
        <PlansProvider>
          <AuthProvider>
            {/* <div> */}
            {/* <Sidebar isOpen={isOpenSidbar} onToggleOpen={setIsOpenSidebar} /> */}
            {/* <main> */}
            {/* <Topbar onToggleSidebar={() => setIsOpenSidebar((is) => !is)} /> */}
            <div className="dashboard">{children}</div>
            {/* </main> */}
            {/* </div> */}
          </AuthProvider>
        </PlansProvider>
      </CatagoriesProvider>
    </>
  );
}
