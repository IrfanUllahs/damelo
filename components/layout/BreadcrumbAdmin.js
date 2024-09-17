import Link from "next/link";
import "../layout/style.css";
export default function BreadcrumbAdmin({ breadcrumbTitle, display }) {
  return (
    <div className="flex items-center justify-between pr-20">
      <div>
        <h3 className="text-[25px] font-semibold">{breadcrumbTitle}</h3>
        <div className="text-content mb-10">We are glad to see you again!</div>
      </div>
      {!display && (
        <Link href="dashboard-add-properties">
          <button className="add-New">Add New</button>
        </Link>
      )}
    </div>
  );
}
