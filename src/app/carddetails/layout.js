"use client";
import { useEffect, useState, lazy, Suspense } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { CatagoriesProvider } from "@/contexts/CatagoriesContext";
import Sidebar from "../Sidebar/sidebar";
import Topbar from "../Topbar/Topbar";
import { Spin } from "antd";

const Carddetails = lazy(() => import("./page"));

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
  }

  return (
    <>
      <div>
        <CatagoriesProvider>
          <AuthProvider>
            <Sidebar isOpen={isOpenSidbar} onToggleOpen={setIsOpenSidebar} />
            <main>
              <Topbar
                onToggleSidebar={handleToggleSidebar}
                loginSection={loginSection}
                setLoginSection={handleToggleLoginSection}
              />
              <Suspense
                fallback={
                  <div style={{ textAlign: "center", height: "100dvh" }}>
                    <Spin></Spin>
                  </div>
                }
              >
                <div className="dashboard">
                  <Carddetails />
                </div>
              </Suspense>
            </main>
          </AuthProvider>
        </CatagoriesProvider>
      </div>
    </>
  );
}
