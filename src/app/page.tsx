import 'remixicon/fonts/remixicon.css';
import Hero from "@/components/Hero";
import React from "react";
import About from '@/components/About';

export default function Home() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Hero />
      <About />
    </div>
  );
}
