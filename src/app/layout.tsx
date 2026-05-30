import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Lead Extrax Software - Extract Qualified Leads, Close More Deals',
  description: 'Lead Extrax provides high-performance lead generation and data extraction for B2B sales and marketing. Get verified prospect data and actionable intelligence to accelerate revenue growth.',
  openGraph: {
    "title": "Lead Extrax Software - Extract Qualified Leads, Close More Deals",
    "description": "Lead Extrax provides high-performance lead generation and data extraction for B2B sales and marketing. Get verified prospect data and actionable intelligence to accelerate revenue growth.",
    "url": "https://www.leadextrax.com",
    "siteName": "Lead Extrax",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/laptop-computer-having-marketing-project-graphs-screen-while-multiethnic-businesspeople-discussing-company-turnover-startup-office-diverse-team-planning-business-collaboration_482257-38712.jpg",
        "alt": "Lead Extrax Dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Lead Extrax Software - Extract Qualified Leads, Close More Deals",
    "description": "Lead Extrax provides high-performance lead generation and data extraction for B2B sales and marketing. Get verified prospect data and actionable intelligence to accelerate revenue growth.",
    "images": [
      "http://img.b2bpic.net/free-photo/laptop-computer-having-marketing-project-graphs-screen-while-multiethnic-businesspeople-discussing-company-turnover-startup-office-diverse-team-planning-business-collaboration_482257-38712.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
