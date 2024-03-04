"use client";
import Cardpage from "./cardpage/page";
import Layout from "./Applayout";
import { AuthProvider } from "@/contexts/AuthContext";
import { Provider } from "react-redux";

import store from "@/store";

import "../store";
import { CatagoriesProvider } from "@/contexts/CatagoriesContext";

function Textpage() {
  return (
    <>
      <Provider store={store}>
        <CatagoriesProvider>
          <AuthProvider>
            <Layout>
              <Cardpage />
            </Layout>
          </AuthProvider>
        </CatagoriesProvider>
      </Provider>
    </>
  );
}
export default Textpage;
