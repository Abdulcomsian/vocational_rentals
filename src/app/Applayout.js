"use client";
import { getCatagories } from "./Sidebar/catagoriesSlice";

import { useState } from "react";
import Sidebar from "./Sidebar/sidebar";
import Topbar from "./Topbar/Topbar";

import { AuthProvider } from "@/contexts/AuthContext";
import {
  CatagoriesProvider,
  useCatagories,
} from "@/contexts/CatagoriesContext";

export default function Layout({ children }) {
  const [isOpenSidbar, setIsOpenSidebar] = useState(false);
  const [loginSection, setLoginSection] = useState(false);

  function handleToggleSidebar() {
    if (loginSection) setLoginSection(false);
    setIsOpenSidebar((is) => !is);
  }

  function handleToggleLoginSection() {
    if (isOpenSidbar) setIsOpenSidebar(false);
    setLoginSection((is) => !is);

    store.dispatch(getCatagories());
  }

  return (
    <>
      <CatagoriesProvider>
        <AuthProvider>
          <div>
            <Sidebar isOpen={isOpenSidbar} onToggleOpen={setIsOpenSidebar} />
            <main>
              <Topbar
                onToggleSidebar={handleToggleSidebar}
                loginSection={loginSection}
                setLoginSection={handleToggleLoginSection}
              />
              <div className="dashboard">{children}</div>
            </main>
          </div>
        </AuthProvider>
      </CatagoriesProvider>
    </>
  );
}
