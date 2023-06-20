import Header from "@/components/hero/Header";
import { ReactNode } from "react";
import Image from "next/image";
import Nav from "@/components/layout/nav";
import HeaderDashboard from "@/components/layout/HeaderDashboard";

type Props = {
  children: ReactNode;
};
function layout({ children }: Props) {
  return (
    <div className="flex-1 flex ">
      <Nav />
      <main className="flex-1 flex flex-col">
        {" "}
        <HeaderDashboard />
        {children}
      </main>
    </div>
  );
}
export default layout;
