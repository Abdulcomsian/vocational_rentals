"use client";

import { useState } from "react";
import Sidebar from "./Sidebar/sidebar";
import Topbar from "./Topbar/Topbar";

export default function Layout({ children }) {
  const [isOpenSidbar, setIsOpenSidebar] = useState(true);
  console.log("APP LAYOUT");

  return (
    <>
      <div>
        <Sidebar isOpen={isOpenSidbar} onToggleOpen={setIsOpenSidebar} />
        <main>
          <Topbar onToggleSidebar={() => setIsOpenSidebar((is) => !is)} />
          <div className="dashboard">{children}</div>
        </main>
      </div>
    </>
  );
}
