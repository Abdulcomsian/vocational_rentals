"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import { CatagoriesProvider } from "@/contexts/CatagoriesContext";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import Topbar from "../Topbar/Topbar";

export default function Layout({ children }) {
  const [isOpenSidbar, setIsOpenSidebar] = useState(true);

  return (
    <>
      <CatagoriesProvider>
        <AuthProvider>
          <div>
            <Sidebar isOpen={isOpenSidbar} onToggleOpen={setIsOpenSidebar} />
            <main>
              <Topbar onToggleSidebar={() => setIsOpenSidebar((is) => !is)} />
              <div className="dashboard">{children}</div>
            </main>
          </div>
        </AuthProvider>
      </CatagoriesProvider>
    </>
  );
}
