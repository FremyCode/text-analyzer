"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import XIcon from "../assets/icons/x-social-media-logo-icon.svg";
import LinkedInIcon from "../assets/icons/linkedin-square-icon.svg";

export const Header = () => {
  return (
    <section className="flex justify-between bg-slate-800 h-[5dvh]">
      <h1 className="mx-[15dvw] my-auto text-2xl font-bold">Text Analyzer</h1>
      <div className="flex mx-[15dvw] my-auto">
        <Link href={"https://x.com"}>
          <Image src={XIcon} alt="X" height={60} className="p-2" />
        </Link>
        <Link href={"https://linkedin.com"}>
          <Image
            src={LinkedInIcon}
            alt="LinkedIn"
            height={60}
            className="p-2"
          />
        </Link>
      </div>
    </section>
  );
};
