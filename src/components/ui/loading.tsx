"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import logo from "@/../public/imgs/alterrablue.gif"

export function Loading() {
   const [isLoading, setIsLoading] = useState(true)
   const [progress, setProgress] = useState(0)
   const [isFading, setIsFading] = useState(false)

   useEffect(() => {
      document.body.style.overflow = "hidden"
      
      const loadingSequence = [
         { target: 10, delay: 300, type: 'jump' },
         { target: 37, delay: 400, type: 'jump' },
         { target: 50, delay: 500, type: 'jump' },
         { target: 73, delay: 600, type: 'continuous' },
         { target: 87, delay: 400, type: 'jump' },
         { target: 99, delay: 300, type: 'jump' },
         { target: 100, delay: 200, type: 'jump' }
      ]

      let currentIndex = 0
      let animationFrameId: number
      let lastProgress = 0

      const nextStep = () => {
         if (currentIndex >= loadingSequence.length) {
            setTimeout(() => {
               setIsFading(true)
               setTimeout(() => {
                  setIsLoading(false)
                  document.body.style.overflow = "auto"
               }, 500)
            }, 500)
            return
         }

         const current = loadingSequence[currentIndex]
         
         if (current.type === 'jump') {
            setProgress(current.target)
            lastProgress = current.target
            currentIndex++
            setTimeout(nextStep, current.delay)
         } else if (current.type === 'continuous') {
            const startProgress = lastProgress
            const startTime = Date.now()
            
            const animate = () => {
               const elapsed = Date.now() - startTime
               const progress = Math.min(elapsed / current.delay, 1)
               
               const newProgress = Math.floor(startProgress + (current.target - startProgress) * progress)
               setProgress(newProgress)

               if (progress < 1) {
                  animationFrameId = requestAnimationFrame(animate)
               } else {
                  lastProgress = current.target
                  currentIndex++
                  setTimeout(nextStep, 100)
               }
            }

            animationFrameId = requestAnimationFrame(animate)
         }
      }

      nextStep()

      return () => {
         document.body.style.overflow = "auto"
         if (animationFrameId) {
            cancelAnimationFrame(animationFrameId)
         }
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
