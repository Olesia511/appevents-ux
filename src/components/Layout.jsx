import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { GlobalStyles } from "../GlobalStyles";

import { ToastContainer } from "react-toastify";
import { Header } from "./Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main
        style={{
          width: "100%",
          height: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "100px",
        }}
      >
        <Suspense fallback={<div>LOADING.......</div>}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
      <GlobalStyles />
    </>
  );
};
