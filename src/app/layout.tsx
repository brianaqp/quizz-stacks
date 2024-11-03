import "./globals.css";

type Props = { children: React.ReactNode }

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body>
          <main>{children}</main>
      </body>
    </html>
  );
}
