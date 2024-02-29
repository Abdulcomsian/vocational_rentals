import Cardpage from "./cardpage/page";
import Layout from "./Applayout";
import { AuthProvider } from "@/contexts/AuthContext";

function Textpage() {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Cardpage />
        </Layout>
      </AuthProvider>
    </>
  );
}
export default Textpage;
