"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import { CatagoriesProvider } from "@/contexts/CatagoriesContext";
import { PlansProvider } from "@/contexts/plansContext";
import { useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import Topbar from "../Topbar/Topbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="dashboard">{children}</div>
    </>
  );
}
