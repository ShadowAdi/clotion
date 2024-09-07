import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { Toaster } from "sonner";
import ModalProvider from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "./src/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clotion",
  description: "The Connected Workspaces to work faster",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/white/favicon.ico",
        href: "/white/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/dark/favicon.ico",
        href: "/dark/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Toaster />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
