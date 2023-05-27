/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getBuildConfig } from "./config/build";

const buildConfig = getBuildConfig();

import {siteDesc} from './api/siteDesc'
const siteDescConfig:any = siteDesc()

export const metadata = {
  title: siteDescConfig.proName + ' ' + siteDescConfig.proDesc,
  description: "Your personal ChatGPT Chat Bot.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: siteDescConfig.proName + ' ' + siteDescConfig.proDesc,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="version" content={buildConfig.commitId} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script>localStorage.setItem('siteDescConfig', JSON.stringify({siteDescConfig}))</script>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
      <script src="/baidu.hm.js" async={true}></script>
    </html>
  );
}
