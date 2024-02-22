"use client";

import { useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import Topbar from "../Topbar/Topbar";

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
    </>
  );
}
