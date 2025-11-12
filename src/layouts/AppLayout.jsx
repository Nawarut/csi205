import { Outlet } from "react-router-dom";

import AppHeader from "../Components/AppHeader";
import AppNavbar from "../Components/AppNavbar";
import AppFooter from "../Components/AppFooter";

const AppLayout = ({products, carts }) => {
  return (
    <>
      <AppHeader />
      <AppNavbar products={products} carts={carts}/>
      <Outlet />
      <AppFooter />
    </>
  );
};

export default AppLayout;
