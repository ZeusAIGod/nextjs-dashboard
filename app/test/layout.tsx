import Header from '@/app/ui/test/Header';
import Footer from '@/app/ui/test/Footer';
import Chatbot from '@/app/ui/test/Chatbot';
 
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <Chatbot />
        </>
    );
}