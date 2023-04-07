import { Nunito } from 'next/font/google';
import './globals.css'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';



export const metadata = {
  title: 'Travo',
  description: 'Your travel companion',
}

const font = Nunito({
  subsets: ['latin'],
});


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // get the currentUser from the session
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar currentUser={currentUser} />
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          {/* <Modal actionLabel='Login' secondaryActionLabel='Sign Up' isOpen={false} title='Sign Up' /> */}
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
