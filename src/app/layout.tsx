import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import AdSenseScript from "@/providers/AdSenseScript";
import "./globals.css";
import { AuthProvider } from "@/hooks/useAuth"
import { Toaster } from "sonner";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Mamalakandam Homestay & Resorts",
    template: "%s | Mamalakandam Homestay",
  },
  description: "Experience Kerala's natural beauty at Mamalakandam Homestay & Resorts in Kuttampuzha, Thattekkad. Nestled near the famous Bird Sanctuary, enjoy comfortable rooms, homemade Kerala cuisine, bird watching tours, and nature trails. Happiness is Having Natural Beauty 🍃 Book now!",
  keywords: [
    "Mamalakandam Homestay",
    "Thattekkad Bird Sanctuary stay",
    "Kerala homestay nature",
    "Kuttampuzha accommodation",
    "Nature resort Kerala",
    "Bird watching Kerala",
    "Western Ghats homestay",
    "Eco tourism Kerala",
    "Kerala forest stay",
    "Budget homestay Kerala",
    "Family homestay Thattekkad",
    "Kerala holiday packages",
    "Nature retreat Kerala",
    "Authentic Kerala experience",
    "Best homestay near Thattekkad",
  ],  
  category: 'tourism',
  openGraph: {
    locale: "en_IN",
    type: "website",
    url: "https://www.mamalakandam-homestay.com",
    title: "Mamalakandam Homestay & Resorts | Thattekkad, Kerala",
    description: "Escape to nature at Mamalakandam Homestay. Located in Kuttampuzha near Thattekkad Bird Sanctuary. Comfortable rooms, Kerala cuisine, bird watching & nature trails. Happiness is Having Natural Beauty 🍃",
    siteName: "Mamalakandam Homestay & Resorts",
    images: [{
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200",
      width: 1200,
      height: 630,
      alt: "Mamalakandam Homestay - Nature Paradise"
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mamalakandam Homestay & Resorts | Nature Paradise in Kerala',
    description: 'Experience Kerala\'s natural beauty at Mamalakandam Homestay. Near Thattekkad Bird Sanctuary. Comfortable rooms, Kerala cuisine & nature trails.',
    images: ['https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200'],
  },
  appleWebApp: { 
    capable: true, 
    statusBarStyle: "black-translucent", 
    title: "Mamalakandam Homestay", 
    startupImage: [{
      url: '/android-chrome-512x512.png',
      media: '(device-width: 768px) and (device-height: 1024px)',
    },]
  },
  // themeColor: "	#cdab7e", /* deprecated */
  verification: { google: 'google0d1ea2d6ded018dc.html'},
  alternates: {
    canonical: 'https://www.mamalakandam-homestay.com',
    languages: {
      'en-US': 'https://www.mamalakandam-homestay.com/en',
      'ml-IN': 'https://www.mamalakandam-homestay.com/ml',
    }
  },
  other: {
    street_address: 'Mamalakandam, Kuttampuzha',
    locality: 'Thattekkad',
    postal_code: '686681',
    country_name: 'India',
    Latitude: '10.1199',
    Longitude: '76.6823',
    'og:priceRange': '₹2000',
    'business:contact_data:street_address': 'Mamalakandam, Kuttampuzha',
    'business:contact_data:locality': 'Thattekkad, Kerala',
    'business:contact_data:postal_code': '686681',
    'business:contact_data:country_name': 'India',
    'place:location:latitude': '10.1199',
    'place:location:longitude': '76.6823'
  },
  manifest: "/site.webmanifest",
  authors: [{ name: "Mamalakandam Homestay & Resorts", url: "https://www.mamalakandam-homestay.com" }],
  creator: 'jhonysouza100',
  publisher: 'Mamalakandam Homestay',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'Next.js',
  applicationName: 'Iguazú Urban Hotel',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      {/* <head> */}
        {/* <AdSenseScript /> */}
      {/* </head> */}
      <body className={`${poppins.className} bg-neutral-50 tracking-wide min-h-screen select-none antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
