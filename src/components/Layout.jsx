import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );  
};

export default Layout;
