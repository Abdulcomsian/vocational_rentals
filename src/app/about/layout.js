"use client";
// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };
import Sidebar from "../Sidebar/sidebar";
import Topbar from "../Topbar/Topbar";

export default function RootLayout({ children }) {
  return (
    <>
      <div>
        <Sidebar />
        <main>
          <Topbar onToggleSidebar={() => setIsOpenSidebar((is) => !is)} />
          <div className="dashboard">{children}</div>
        </main>
      </div>
      {/* <html lang="en">
        <body>{children}</body>
      </html> */}
    </>
  );
}