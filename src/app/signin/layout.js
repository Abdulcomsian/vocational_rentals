"use client";

import { useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import Topbar from "../Topbar/Topbar";
import { AuthProvider } from "@/contexts/AuthContext";

export default function Layout({ children }) {
  return (
    <>
      <AuthProvider>
        {/* <div> */}
        {/* <Sidebar isOpen={isOpenSidbar} onToggleOpen={setIsOpenSidebar} /> */}
        {/* <main> */}
        {/* <Topbar
              onToggleSidebar={handleToggleSidebar}
              loginSection={loginSection}
              setLoginSection={handleToggleLoginSection}
            /> */}
        <div className="dashboard">{children}</div>
        {/* </main> */}
        {/* </div> */}
      </AuthProvider>
    </>
  );
}
