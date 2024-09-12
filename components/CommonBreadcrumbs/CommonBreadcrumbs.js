// src/app/Breadcrubms.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Breadcrumbs() {
  const pathname = usePathname();
  const BreadcrumbsArray = pathname.split("/");
  BreadcrumbsArray.shift();

  return (
    <>
      <ul className="breadcrumbs">
        {BreadcrumbsArray.map((item, index) => {
          const href = "/" + BreadcrumbsArray.slice(0, index + 1).join("/");
          return (
            <>
              <li key={index}>
                <Link href={href}>{item}</Link>
              </li>
              <li>{index < BreadcrumbsArray.length - 1 && <h4> {">"} </h4>}</li>
            </>
          );
        })}
      </ul>
      <hr />
    </>
  );
}
