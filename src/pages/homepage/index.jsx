
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
    AlignRight,
    ChevronDown
} from 'lucide-react';

const VoicingAIDashboard = () => {
    const [timeRange, setTimeRange] = useState('Last 7 Days');
    const [assistantFilter, setAssistantFilter] = useState('Assistant 1');
    return (
        <div className="flex-1 overflow-auto">

            <main className="p-6">
                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <FeatureCard
                        icon={<GitBranch className="text-indigo-600" size={24} />}
                        title="Conversational Pathways"
                        description="Design complex branching conversation flows"
                    />
                    <FeatureCard
                        icon={<Phone className="text-blue-600" size={24} />}
                        title="AI Assistant"
                        description="Create adaptive intelligent conversations at scale"
                    />
                    <FeatureCard
                        icon={<Database className="text-emerald-600" size={24} />}
                        title="Knowledge Base"
                        description="Create dynamic knowledge bases that stay current"
                    />
                    <FeatureCard
                        icon={<Mic className="text-purple-600" size={24} />}
                        title="AI Voices"
                        description="Create voice clones or choose from diverse range"
                    />
                </div>

                <div className="flex justify-end mb-6 space-x-4">
                    <div className="relative">
                        <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white flex items-center space-x-2 text-sm text-gray-700 hover:bg-gray-50">
                            <span>{timeRange}</span>
                            <ChevronDown size={16} />
                        </button>
                    </div>

                    <div className="relative">
                        <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white flex items-center space-x-2 text-sm text-gray-700 hover:bg-gray-50">
                            <span>{assistantFilter}</span>
                            <ChevronDown size={16} />
                        </button>
                    </div>
                </div>

                {/* Analytics Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Chart 1 */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold text-gray-800">Hourly Calls</h3>
                            <div className="flex items-center">
                                <span className="text-sm text-gray-600 mr-2">Last 7 Days</span>
                                <ChevronRight size={16} className="text-gray-400" />
                            </div>
                        </div>
                        <DensityChart />
                    </div>

                    {/* Chart 2 */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold text-gray-800">Call Density by Area Code</h3>
                            <div className="flex items-center">
                                <span className="text-sm text-gray-600 mr-2">Global View</span>
                                <ChevronRight size={16} className="text-gray-400" />
                            </div>
                        </div>
                        <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                            <WorldMap />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default VoicingAIDashboard


function FeatureCard({ icon, title, description }) {
    return (
        <div className="cursor-pointer bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-50 rounded-full">
                    {icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
}

function DensityChart() {
    // Mock data for density chart
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const hours = ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'];

    return (
        <div className="w-full h-64 overflow-hidden">
            <div className="flex h-full">
                <div className="flex flex-col justify-between pr-2 text-xs text-gray-500">
                    {hours.map((hour, idx) => (
                        <span key={idx}>{hour}</span>
                    ))}
                </div>

                <div className="flex-1 flex">
                    {days.map((day, idx) => (
                        <div key={idx} className="flex-1 flex flex-col">
                            <div className="text-xs text-gray-500 text-center mb-2">{day}</div>
                            <div className="flex-1 flex flex-col justify-between">
                                {hours.map((_, hourIdx) => {
                                    // Generate random intensity for visualization
                                    const random = Math.random();
                                    let bgColor = 'bg-blue-100';

                                    if (random > 0.8) bgColor = 'bg-blue-500';
                                    else if (random > 0.6) bgColor = 'bg-blue-400';
                                    else if (random > 0.4) bgColor = 'bg-blue-300';
                                    else if (random > 0.2) bgColor = 'bg-blue-200';

                                    return (
                                        <div
                                            key={hourIdx}
                                            className={`h-6 mx-0.5 rounded-sm ${random > 0.2 ? bgColor : 'bg-gray-100'}`}
                                        ></div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function WorldMap() {
    return (
        <svg viewBox="0 0 1200 600" className="w-full h-full text-blue-500">
            <path
                d="M600,50 Q800,150 900,200 T1100,300 Q1000,450 800,500 T400,550 Q200,500 100,350 T300,150 Q400,100 600,50 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.2"
            />
            <circle cx="400" cy="250" r="20" fill="currentColor" opacity="0.7" />
            <circle cx="700" cy="350" r="15" fill="currentColor" opacity="0.5" />
            <circle cx="900" cy="200" r="10" fill="currentColor" opacity="0.3" />
            <circle cx="250" cy="400" r="12" fill="currentColor" opacity="0.4" />
            <circle cx="600" cy="300" r="8" fill="currentColor" opacity="0.6" />
        </svg>
    );
}