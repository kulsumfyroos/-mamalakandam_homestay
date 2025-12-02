"use client";

import { useEffect } from "react";
import config from "@/config";

interface AdSenseBannerProps {
  className?: string;
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: string;
}

function AdSenseBanner({ className, dataAdFormat, dataAdSlot, dataFullWidthResponsive }: AdSenseBannerProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).adsbygoogle) {
      try {
        // Verificamos si `adsbygoogle.instances` está definido y si no tiene instancias activas
        if ((window as any).adsbygoogle.instances && (window as any).adsbygoogle.instances.length === 0) {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        }
      } catch (error: any) {
        console.error("Error al cargar AdSense:", error.message);
      }
    }
  }, []);  // El array vacío asegura que el efecto se ejecute solo una vez

  return (
    <div className={`google_ad ${className || ''}`} id={`_ad${dataAdSlot}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={`ca-pub-${config.GOOGLE_PUB_ID}`}
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive}
      ></ins>
    </div>
  );
}

export default AdSenseBanner;
