"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import logo from "@/../public/imgs/alterrablue.gif"

export function Loading() {
   const [isLoading, setIsLoading] = useState(true)
   const [progress, setProgress] = useState(0)
   const [isFading, setIsFading] = useState(false)

   useEffect(() => {
      // Controla o overflow do body
      document.body.style.overflow = "hidden"
      
      const timer = setInterval(() => {
         setProgress((prev) => {
            if (prev >= 100) {
               clearInterval(timer)
               // Adiciona delay de 3 segundos antes de começar o fade
               setTimeout(() => {
                  setIsFading(true)
                  // Após a animação de fade terminar, remove o loading
                  setTimeout(() => {
                     setIsLoading(false)
                     document.body.style.overflow = "auto"
                  }, 500)
               }, 3000)
               return 100
            }
            return prev + 1
         })
      }, 50)

      return () => {
         clearInterval(timer)
         document.body.style.overflow = "auto"
      }
   }, [])

   if (!isLoading) return null

   return (
      <div className={`fixed inset-0 flex items-center justify-center bg-black z-50 ${isFading ? "animate-fade-out" : ""}`}>
         <div className="relative w-[300px] h-[300px]">
            <CircularBars quantity={60} radius={150} barWidth={2} barHeight={7} color="bg-blue-500" spinClass="animate-spin-slow" />
            <CircularProgress progress={progress} radius={140} strokeWidth={7} />
            <CircularBars quantity={236} radius={150} barWidth={1} barHeight={2} color="bg-blue-500" spinClass="animate-spin-slower" />
            <div className="absolute inset-[25px] border-3 border-blue-500 rounded-full border-dotted animate-spin-reverse"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
               <Image src={logo} alt="Logo" width={150} height={150} />
               <div className="text-blue-500 font-medium text-lg flex flex-col items-center">
                  <span>LOADING</span>
                  <span> [ {progress}% ] </span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default function CircularBars({
   quantity = 12,
   radius = 40,
   barWidth = 4,
   barHeight = 12,
   color = "bg-black",
   spinClass = "",
}: {
   quantity?: number;
   radius?: number;
   barWidth?: number;
   barHeight?: number;
   color?: string;
   spinClass?: string;
}) {
   const bars = Array.from({ length: quantity });

   return (
      <div
         className={`pointer-events-none absolute ${spinClass}`}
         style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            transform: "translate(-50%, -50%)",
         }}
      >
         {bars.map((_, i) => {
            const angle = (360 / quantity) * i;

            return (
               <div
                  key={i}
                  className={`absolute origin-bottom ${color}`}
                  style={{
                     width: `${barWidth}px`,
                     height: `${barHeight}px`,
                     top: `calc(50% - ${barHeight}px)`,
                     left: `calc(50% - ${barWidth / 2}px)`,
                     transform: `rotate(${angle}deg) translateY(-${radius}px)`,
                  }}
               />
            );
         })}
      </div>
   );
}

function CircularProgress({
   progress,
   radius,
   strokeWidth = 4,
}: {
   progress: number
   radius: number
   strokeWidth?: number
}) {
   const circumference = 2 * Math.PI * radius
   const strokeDashoffset = circumference - (progress / 100) * circumference
   const padding = strokeWidth / 2

   return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ padding }}>
         <svg width={radius * 2} height={radius * 2} className="rotate-[-90deg]">
            <defs>
               <linearGradient id="blueCyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "rgb(59, 130, 246)" }} />
                  <stop offset="100%" style={{ stopColor: "rgb(6, 182, 212)" }} />
               </linearGradient>
            </defs>
            <circle
               className="stroke-[url(#blueCyanGradient)]"
               fill="none"
               strokeWidth={strokeWidth}
               strokeDasharray={circumference}
               strokeDashoffset={strokeDashoffset}
               r={radius - padding}
               cx={radius}
               cy={radius}
               strokeLinecap="round"
            />
         </svg>
      </div>
   )
}
