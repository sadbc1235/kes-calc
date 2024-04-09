import "../styles/global.css"
import styles from "../styles/layout.module.css"
import { Metadata } from "next"

export const metadata :Metadata = {
  title: {
    template: "%s",
    default: "KES"
  },
  description: '가계부',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body>
        <div className={styles.backGround} ></div>
        {children}
      </body>
    </html>
  )
}
