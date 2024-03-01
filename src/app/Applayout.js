"use client";

import { useState } from "react";
import Sidebar from "./Sidebar/sidebar";
import Topbar from "./Topbar/Topbar";

import { AuthProvider } from "@/contexts/AuthContext";

export default function Layout({ children }) {
  const [isOpenSidbar, setIsOpenSidebar] = useState(false);
  const [loginSection, setLoginSection] = useState(false);
  console.log("APP LAYOUT");

  function handleToggleSidebar() {
    if (loginSection) setLoginSection(false);
    setIsOpenSidebar((is) => !is);
  }

  function handleToggleLoginSection() {
    if (isOpenSidbar) setIsOpenSidebar(false);
    setLoginSection((is) => !is);
  }

  return (
    <>
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
    </>
  );
}
