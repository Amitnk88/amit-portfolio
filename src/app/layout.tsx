import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://amitbnaik.vercel.app"),
  title: "Amit B Naik | Software Engineer | AI/ML Developer",
  description:
    "Portfolio of Amit B Naik — Software Engineer building practical intelligent applications across Android, full-stack, and AI/ML. Featuring Fraud Lens, AI Business Advisor, and Namma-Platform.",
  openGraph: {
    title: "Amit B Naik | Software Engineer | AI/ML Developer",
    description:
      "Software Engineer building practical intelligent applications across Android, full-stack, and AI/ML.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Inline script avoids a light-mode flash before hydration.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
