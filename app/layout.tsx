import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FormTrack — Record Why Users Abandon Checkout Forms',
  description: 'Screen recordings and heatmaps for checkout forms. Identify exactly where users drop off and fix your conversion leaks.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b4a0e829-d21c-4af9-ac18-1907371e4821"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
