import React from "react";
import { UserButton } from "@clerk/clerk-react";

export const Home = () => {
  return (
    <div>
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
};
