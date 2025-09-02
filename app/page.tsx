"use client";

import PixelBlast from "@/components/PixelBlast";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full relative flex items-center justify-center">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#1A5FB4"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          transparent={false}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
        />
        <div className="z-10">
          <ProfileCard
className="no-gradient"
            name="Apurba Das"
            title="Software Engineer"
            handle="@apurbaxx"
            status="Online"
            contactText="Contact Me"
            avatarUrl=".. /public/file.svg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            showBehindGradient={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>
    </>
  );
}
