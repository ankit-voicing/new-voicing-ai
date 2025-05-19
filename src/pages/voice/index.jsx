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
    PieChart,
    Database,
    AlignRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Copy, Star, Volume2 } from 'lucide-react';


export default function VoicePage() {
    const [expanded, setExpanded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [activeTab, setActiveTab] = useState("voice-settings"); // NEW

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;

    return (
        <div className="flex h-screen bg-slate-50 text-gray-800 overflow-hidden">
            {/* Sidebar */}
            <div
                onMouseEnter={() => !isMobile && setExpanded(true)}
                onMouseLeave={() => !isMobile && setExpanded(false)}
                className={`${expanded ? 'w-64' : 'w-20'} bg-white transition-all duration-300 ease-in-out overflow-hidden flex flex-col border-r border-gray-100 shadow-sm`}
            >
                {/* Logo */}
                <div className="flex items-center p-5 border-b border-gray-100">
                    <div className="bg-blue-500 text-white p-2 rounded-md">
                        <Mic size={20} />
                    </div>
                    <h1 className={`ml-3 font-bold text-xl transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'}`}>
                        Voicing<span className="text-blue-500">AI</span>
                    </h1>
                    {isMobile && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="ml-auto text-gray-500 hover:text-gray-700"
                        >
                            <AlignRight size={20} />
                        </button>
                    )}
                </div>

                {/* Nav Links */}
                <nav className="flex-1 py-4">
                    <NavLink icon={<Home size={20} />} label="Home" expanded={expanded} to="/" />
                    <NavLink icon={<Users size={20} />} label="AI Assistant" expanded={expanded} />
                    <NavLink icon={<GitBranch size={20} />} label="Pathways" expanded={expanded} />
                    <NavLink icon={<Mic size={20} />} label="Voice" active expanded={expanded} to="/voice" />
                    <NavLink icon={<Phone size={20} />} label="Call Logs" expanded={expanded} />
                    <NavLink icon={<BarChart2 size={20} />} label="Analytics" expanded={expanded} />
                    <NavLink icon={<Database size={20} />} label="Knowledge Base" expanded={expanded} />
                    <NavLink icon={<PieChart size={20} />} label="Campaigns" expanded={expanded} />
                </nav>

                {/* Bottom Nav */}
                <div className="mt-auto border-t border-gray-100 py-4">
                    <NavLink icon={<Settings size={20} />} label="Settings" expanded={expanded} />
                    <NavLink icon={<LogOut size={20} />} label="Logout" expanded={expanded} />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {/* Top Nav */}
                <header className="bg-white p-5 flex items-center justify-between border-b border-gray-100 sticky top-0 z-10">
                    <h2 className="text-xl font-semibold text-gray-800">Voice Management</h2>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                R
                            </div>
                            <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                        </div>
                    </div>
                </header>

                {/* Tab Switcher */}
                <div className="flex border-b border-gray-200 px-6 pt-4">
                    <button
                        onClick={() => setActiveTab("voice-settings")}
                        className={`mr-6 pb-2 font-medium ${activeTab === "voice-settings" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                    >
                        Voice Settings
                    </button>
                    <button
                        onClick={() => setActiveTab("curated-voices")}
                        className={`pb-2 font-medium ${activeTab === "curated-voices" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                    >
                        Curated Voices
                    </button>
                </div>

                {/* Tab Content */}
                <main className="p-6">
                    {activeTab === "voice-settings" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Voice Settings</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {Array.from({ length: 6 }).map((_, idx) => (
                                    <VoiceCard
                                        key={idx}
                                        name="Arya"
                                        language="English"
                                        imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
                                        rating={4}
                                    />
                                ))}
                            </div>
                        </div>
                    )}


                    {activeTab === "curated-voices" && (
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <Mic className="text-blue-600" size={24} />
                                </div>
                                <h3 className="text-lg font-semibold text-blue-600 underline">Curated Voices</h3>
                            </div>
                            <p className="text-gray-600">This is the curated voices tab content.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

function NavLink({ icon, label, active, expanded, to }) {
    return (
        <Link to={to || '#'} className={`flex items-center px-5 py-3 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors ${active ? 'text-blue-600 bg-blue-50' : 'text-gray-600'}`}>
            <div className="flex-shrink-0">{icon}</div>
            <span className={`ml-3 whitespace-nowrap transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0 hidden md:block'}`}>
                {label}
            </span>
            {active && (
                <div className="ml-auto w-1 h-6 bg-blue-600 rounded-full"></div>
            )}
        </Link>
    );
}

function VoiceCard({ name, language, imageUrl, rating = 4 }) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-5 w-full max-w-xs">
            {/* Top Section */}
            <div className="flex items-center gap-4 mb-3">
                <div className="h-12 w-12 rounded-full border-2 border-blue-400 p-0.5 bg-gradient-to-tr from-blue-100 to-blue-200">
                    <img src={imageUrl} alt={name} className="h-full w-full object-cover rounded-full" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-1 font-semibold text-gray-800">{name}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                        <span className="truncate max-w-[100px]">1s6aiegcFi...</span>
                        <Copy size={14} className="cursor-pointer text-gray-400 hover:text-gray-600" />
                    </div>
                </div>
                <div className="flex gap-[2px] text-blue-500">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < rating ? "#3b82f6" : "none"} stroke="#3b82f6" />
                    ))}
                </div>
            </div>

            {/* Language Pill */}
            <div className="mb-4">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-full">{language}</span>
            </div>

            {/* Play Button */}
            <button className="w-full flex items-center justify-center gap-2 border border-blue-500 text-blue-600 rounded-full py-2 text-sm hover:bg-blue-50 transition-all duration-200 hover:scale-105">
                <Volume2 size={16} className="animate-pulse" />
                Play
            </button>
        </div>
    );
}
