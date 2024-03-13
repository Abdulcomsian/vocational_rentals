"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import { useEffect, useState, lazy, Suspense } from "react";
import Sidebar from "@/app/Sidebar/sidebar";
import Topbar from "@/app/Topbar/Topbar";
import { CatagoriesProvider } from "@/contexts/CatagoriesContext";
import { Spin } from "antd";

const AddToolPage = lazy(() => import("./page"));

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
          <Suspense
            fallback={
              <div style={{ textAlign: "center", height: "100dvh" }}>
                <Spin></Spin>
              </div>
            }
          >
            <div className="dashboard">
              <AddToolPage />
            </div>
          </Suspense>
          {/* </main> */}
          {/* </div> */}
        </AuthProvider>
      </CatagoriesProvider>
    </>
  );
}
