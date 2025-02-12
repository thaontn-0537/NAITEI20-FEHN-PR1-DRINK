import { useState } from "react";
import Header from "./components/Header";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-white text-center">
        <Button>ADD TO CART</Button>
        <Button size="lg">ĐĂNG NHẬP</Button>
      </main>
    </>
  );
}

export default App;
