import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout; 