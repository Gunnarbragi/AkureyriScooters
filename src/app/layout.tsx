import './globals.css'

export const metadata = {
  title: 'Akureyri Scooters | Scooter Rental in Akureyri',
  description:
    'Premium mobility scooter rental in Akureyri, Iceland. Located near the cruise port.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
