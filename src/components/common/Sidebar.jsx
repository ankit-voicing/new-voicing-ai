import { useState, useEffect } from 'react';
import {
    Home,
    Users,
    GitBranch,
    Mic,
    Phone,
    BarChart2,
    Settings,
    LogOut,
    ChevronRight,
    PieChart,
    Database,
    AlignRight
} from 'lucide-react';
import SidebarLink from './SidebarLink';
import { useLocation, useParams } from 'react-router-dom';

const Sidebar = () => {

    const { pathname } = useLocation()
    const [expanded, setExpanded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;


    return (
        <div
            onMouseEnter={() => !isMobile && setExpanded(true)}
            onMouseLeave={() => !isMobile && setExpanded(false)}
            className={`${expanded ? 'w-64' : 'w-20'} bg-white transition-all duration-300 ease-in-out overflow-hidden flex flex-col border-r border-gray-100 shadow-sm fixed h-fill`}
        >


            {/* Nav Links */}
            <nav className="flex-1 mt-2">
                <SidebarLink icon={<Home size={20} />} label="Home" path={'/dashboard'} active={pathname === '/dashboard'} expanded={expanded} />
                <SidebarLink icon={<Users size={20} />} label="AI Assistant" path={'/ai-assistant'} active={pathname === '/ai-assistant'} expanded={expanded} />
                <SidebarLink icon={<GitBranch size={20} />} label="Pathways" expanded={expanded} />
                <SidebarLink icon={<Mic size={20} />} label="Voice" expanded={expanded} />
                <SidebarLink icon={<Phone size={20} />} label="Call Logs" path={'/call-logs'} active={pathname === '/call-logs'} expanded={expanded} />
                <SidebarLink icon={<BarChart2 size={20} />} label="Analytics" path={'/analytics'} active={pathname === '/analytics'} expanded={expanded} />
                <SidebarLink icon={<Database size={20} />} label="Knowledge Base" expanded={expanded} />
                <SidebarLink icon={<PieChart size={20} />} label="Campaigns" expanded={expanded} />
            </nav>

            {/* Bottom Nav */}
            <div className="mt-auto border-t border-gray-100 py-4">
                <SidebarLink icon={<Settings size={20} />} label="Settings" expanded={expanded} />
                <SidebarLink icon={<LogOut size={20} />} label="Logout" expanded={expanded} />
            </div>
        </div>
    )
}

export default Sidebar