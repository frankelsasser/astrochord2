import '../styles/globals.css';

export const metadata = {
  title: 'AstroChord',
  description: 'Minimalist, artist-first music discovery',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-primary text-white">
        <main className="p-8">
          <h1 className="text-4xl font-bold text-accent mb-6">Welcome to AstroChord 🎸</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
