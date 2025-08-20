import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import Hero from "@/components/Layout/Hero";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto flex-1 py-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
