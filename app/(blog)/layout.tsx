import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Animesh's Blog",
    default: "Blogs",
  },
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
