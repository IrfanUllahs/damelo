import Favcard from "@/components/favCard/Favcard";
import LayoutAdmin from "@/components/layout/LayoutAdmin";
import Link from "next/link";
export default function DashboardMyFavorites() {
  return (
    <>
      <LayoutAdmin breadcrumbTitle="My Favorities" mainContentCls="spacing-20">
        <div>
          <Favcard />
          <Favcard />
          <Favcard />
        </div>
      </LayoutAdmin>
    </>
  );
}
