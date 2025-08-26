import "./globals.css";

export const metadata = {
    title: "Navneet Kaur Portfolio",
    description: "Software Developer & IT Infrastructure Specialist",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
