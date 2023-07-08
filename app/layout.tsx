
import Navbar from "@/components/Nav/Navbar";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Metadata } from "next";


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata : Metadata ={
  title:"Thant Zin Win - Web Developer",
}

const bgAni = Array.from({length: 400}, (_, i) => i);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#11122B] overflow-y-scroll w-screen`}>
        {/* <div className="absolute top-0 left-0 w-full h-screen grid grid-cols-100 grid-rows-200 overflow-hidden saturate-200 bg-transparent ">
          {bgAni.map((box,i)=>(
            <div key={i} className="z-[1] brightness-125 duration-[2000] ease-linear relative m-[2px] bg-[#11122B] hover:bg-[#11122B] hover:duration-0"></div>
          ))}
          
        </div> */}
        <div className="absolute top-0 left-0 w-full h-[40px] bg-[#00bfff] blur-[60px] animate-bg-ani"></div>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
//#11122B
//#00bfff