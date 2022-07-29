import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import {
  Navbar,
  Feed,
  PinDetails,
  CreatePin,
  Search,
  Protected,
} from "../components";

const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user && user}
        />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route
            path="/pin-detail/:pinId"
            element={
              <Protected user={user}>
                <PinDetails user={user && user} />
              </Protected>
            }
          />
          <Route
            path="/create-pin"
            element={
              <Protected user={user}>
                <CreatePin user={user && user} />
              </Protected>
            }
          />
          <Route
            path="/search"
            element={
              <Protected user={user}>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              </Protected>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
