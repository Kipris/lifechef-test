import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { StyledComponentsRegistry } from "@/src/lib/styled-components-registry";
import { Navigation } from "@/src/components/navigation";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lifechef test",
  description: "Test app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${sora.className} text-base font-normal`}>
        <StyledComponentsRegistry>
          <Navigation />
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
