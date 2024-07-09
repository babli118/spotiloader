"use client";
import React, { Fragment, ReactNode, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  children: ReactNode;
};

const AdComponent = ({ children }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    try {
      <script
        type="text/javascript"
        src="//pl22734743.highrevenuenetwork.com/b4/2c/e3/b42ce3725f64d46e4be70e10ac38fc11.js"
      ></script>;
    } catch (err) {
      console.error(err);
    }
  }, [pathname, searchParams]);
  return <Fragment>{children}</Fragment>;
};

export default AdComponent;
