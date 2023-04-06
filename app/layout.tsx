import { Nunito } from 'next/font/google';
import './globals.css'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';

export const metadata = {
  title: 'Travo',
  description: 'Your travel companion',
}

const font = Nunito({
  subsets: ['latin'],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
          <RegisterModal />
          {/* <Modal actionLabel='Login' secondaryActionLabel='Sign Up' isOpen={false} title='Sign Up' /> */}
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
