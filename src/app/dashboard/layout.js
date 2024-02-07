import Sidebar from "../Sidebar/sidebar";
import Topbar from "../Topbar/Topbar";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Sidebar />
        <main>
          <Topbar />
          <div className="dashboard">{children}</div>
        </main>
      </div>
    </>
  );
}
