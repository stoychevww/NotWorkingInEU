// pages/index.tsx
import React from "react";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to NotWorkingInEU</h1>
      <p>
        This site lists the services not available in the EU due to regulations.
      </p>
      <Footer />
    </div>
  );
};

export default HomePage;
