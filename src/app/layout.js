import { Inter } from "next/font/google";
import "./globals.css";
import "@/assets/css/sidebar.css";
import "@/assets/css/nav.css";
import "@/assets/css/home.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/responsive.css";
import "@/assets/css/variable.css";
import "@/assets/css/detail.css";
import "@/assets/css/variable.css";
import "@/assets/css/addlist.css";
import "@/assets/css/about.css";
import "@/assets/css/signin.css";
import "@/assets/css/signup.css";
import "@/assets/css/contact.css";
import "@/assets/css/subscription.css";
import "@/assets/css/addtool.css";
import "@/assets/css/alllisting.css";
import "@/assets/css/terms.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vacation Rentals",
  description: "Vacation Rentals",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
      </head>
      <body className={inter.className}>
        {children}
        <script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          async
        ></script>
        
      </body>
    </html>
  );
}
