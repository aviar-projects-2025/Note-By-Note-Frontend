import './globals.css'

export const metadata = {
  title: 'Note By Note AZ – Free Music Education for Middle Schoolers',
  description: 'Note By Note AZ is a student-run nonprofit providing free one-on-one music instruction to middle school students in Arizona.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Poppins:wght@400;500;600;700;800&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
