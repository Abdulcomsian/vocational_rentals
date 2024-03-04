"use client";

import { useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import Topbar from "../Topbar/Topbar";
import { AuthProvider } from "@/contexts/AuthContext";
import { CatagoriesProvider } from "@/contexts/CatagoriesContext";

export default function Layout({ children }) {
  return (
    <>
      <CatagoriesProvider>
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
      </CatagoriesProvider>
    </>
  );
}
