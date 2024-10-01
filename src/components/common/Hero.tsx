"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { FlipWords } from "../ui/flip-words";
import { MaskContainer } from "../ui/svg-mask-effect";

export function Hero() {
    const words = ["To keep you on track!", "To stay on top of your goals", "To help u understand better"];
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className=" text-3xl leading-2 md:text-4xl mb-0 font-semibold text-black dark:text-white">
                Master your spending and unlock financial wisdom <br />
              <span className="text-4xl text-primary md:text-[6rem] font-bold mt-1 leading-none">
                To keep you on track!
              </span>
            </h1>
          </>
        }
      >
        <div className="relative w-full max-w-[1000px] h-full  overflow-hidden">
            <Image
            src="/finance.webp"
            alt="Finance"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px" // Handle responsive image sizes
            />
        </div>
      </ContainerScroll>
      <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            Introducing Prudencia, powered by AI! Effortlessly monitor your spending while receiving personalized insights and budgeting tips. Take control of your finances and achieve your financial goals with smart, data-driven recommendations.
          </p>
        }
        className="h-[40rem] rounded-md mx-auto max-w-7xl"
      >
        Introducing <span className="text-primary">Prudencia</span>, powered by <span className="text-ring">AI!</span> Effortlessly monitor your <span className="text-red-500">spending</span> while receiving <span className="text-green-400">personalized insights and budgeting tips</span>. Take control of your finances and achieve your financial goals with smart, data-driven recommendations.
      </MaskContainer>
    </div>
    </div>
  );
}
