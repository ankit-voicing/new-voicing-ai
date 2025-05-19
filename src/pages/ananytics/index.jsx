import React, { useState } from 'react';
import {
    Bell,
    Home,
    Settings,
    User,
    LogOut,
    ChevronDown,
    Phone,
    Mail,
    PieChart,
    MessageSquare,
    Headphones,
    BarChart2,
    HelpCircle,
    PhoneForwarded,
    Clock
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const taskCompletionData = [
    { name: 'JAN', value: 48 },
    { name: 'FEB', value: 32 },
    { name: 'MAR', value: 65 },
    { name: 'APR', value: 85 },
    { name: 'MAY', value: 58 },
    { name: 'JUN', value: 70 },
    { name: 'JUL', value: 85 },
    { name: 'AUG', value: 65 },
    { name: 'SEP', value: 72 },
    { name: 'OCT', value: 55 },
    { name: 'NOV', value: 60 },
    { name: 'DEC', value: 70 },
];

const callDurationData = [
    { name: 'JAN', value: 35 },
    { name: 'FEB', value: 68 },
    { name: 'MAR', value: 38 },
    { name: 'APR', value: 54 },
    { name: 'MAY', value: 55 },
    { name: 'JUN', value: 62 },
    { name: 'JUL', value: 70 },
    { name: 'AUG', value: 58 },
    { name: 'SEP', value: 82 },
];

const reasonCallEndedData = [
    { name: 'Completed Task', value: 65 },
    { name: 'Customer Hung Up', value: 20 },
    { name: 'Technical Issue', value: 10 },
    { name: 'Other', value: 5 },
];

const VoicingAIAnalytics = () => {
    const [activeTab, setActiveTab] = useState('call');
    const [durationFilter, setDurationFilter] = useState('Last 24 days');
    const [campaignFilter, setCampaignFilter] = useState('All Campaigns');

    return (
        <div className="flex h-screen bg-gray-50">

            {/* Main Content */}
            <div className="flex-1 flex flex-col">


                {/* Content */}
                <div className="flex-1 p-6">


                    {/* Metrics Cards - First Row */}
                    <div className="grid grid-cols-3 gap-6 mb-6">
                        {/* Total Calls */}
                        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5 flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Total Calls</p>
                                <h2 className="text-4xl font-semibold text-blue-600">66</h2>
                                <p className="text-xs text-gray-500 mt-1">Last 24 days</p>
                            </div>
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <Phone size={20} className="text-gray-500" />
                            </div>
                        </div>

                        {/* Answered */}
                        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5 flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Answered</p>
                                <h2 className="text-4xl font-semibold text-teal-500">12</h2>
                                <p className="text-xs text-gray-500 mt-1">Last 24 days</p>
                            </div>
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <Phone size={20} className="text-gray-500" />
                            </div>
                        </div>

                        {/* Voicemail */}
                        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5 flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Voicemail</p>
                                <h2 className="text-4xl font-semibold text-orange-300">35</h2>
                                <p className="text-xs text-gray-500 mt-1">Last 24 days</p>
                            </div>
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <Mail size={20} className="text-gray-500" />
                            </div>
                        </div>
                    </div>

                    {/* Metrics Cards - Second Row */}
                    <div className="grid grid-cols-3 gap-6 mb-6">
                        {/* Unknown */}
                        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5 flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Unknown</p>
                                <h2 className="text-4xl font-semibold text-gray-600">07</h2>
                                <p className="text-xs text-gray-500 mt-1">Last 24 days</p>
                            </div>
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <HelpCircle size={20} className="text-gray-500" />
                            </div>
                        </div>

                        {/* Transferred */}
                        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5 flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Transferred</p>
                                <h2 className="text-4xl font-semibold text-red-500">12</h2>
                                <p className="text-xs text-gray-500 mt-1">Last 24 days</p>
                            </div>
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <PhoneForwarded size={20} className="text-gray-500" />
                            </div>
                        </div>

                        {/* Avg Call Duration */}
                        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5 flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Avg Call Duration</p>
                                <h2 className="text-4xl font-semibold text-teal-400">4m 47s</h2>
                                <p className="text-xs text-gray-500 mt-1">Last 24 days</p>
                            </div>
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <Clock size={20} className="text-gray-500" />
                            </div>
                        </div>
                    </div>

                    {/* Charts - First Row */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        {/* Task Completion Rate */}
                        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className="text-blue-600 font-medium">Task Completion</p>
                                    <p className="text-sm text-gray-500">Rate</p>
                                </div>
                                <div className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                                    65%
                                </div>
                            </div>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={taskCompletionData}>
                                        <defs>
                                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            domain={[0, 100]}
                                            ticks={[0, 25, 50, 75, 100]}
                                            tickFormatter={(value) => `${value}%`}
                                        />
                                        <Tooltip
                                            formatter={(value) => [`${value}%`, 'Completion Rate']}
                                            contentStyle={{
                                                borderRadius: '8px',
                                                border: '1px solid #e5e7eb',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                            }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="value"
                                            stroke="#3b82f6"
                                            strokeWidth={3}
                                            dot={false}
                                            activeDot={{ r: 6, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
                                            fillOpacity={1}
                                            fill="url(#colorValue)"
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Average Call Duration by Assistant */}
                        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className="text-blue-600 font-medium">Average Call Duration</p>
                                    <p className="text-sm text-gray-500">by Assistant</p>
                                </div>
                            </div>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={callDurationData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            domain={[0, 100]}
                                            ticks={[0, 25, 50, 75, 100]}
                                        />
                                        <Tooltip
                                            formatter={(value) => [`${value} seconds`, 'Duration']}
                                            contentStyle={{
                                                borderRadius: '8px',
                                                border: '1px solid #e5e7eb',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                            }}
                                        />
                                        <Bar
                                            dataKey="value"
                                            fill="#dbeafe"
                                            radius={[4, 4, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Charts - Second Row */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* Reason Call Ended */}
                        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className="text-blue-600 font-medium">Reason</p>
                                    <p className="text-sm text-gray-500">Call Ended</p>
                                </div>
                            </div>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={reasonCallEndedData}
                                        layout="vertical"
                                    >
                                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.1} />
                                        <XAxis
                                            type="number"
                                            axisLine={false}
                                            tickLine={false}
                                            domain={[0, 100]}
                                        />
                                        <YAxis
                                            type="category"
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                        />
                                        <Tooltip
                                            formatter={(value) => [`${value}%`, 'Percentage']}
                                            contentStyle={{
                                                borderRadius: '8px',
                                                border: '1px solid #e5e7eb',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                            }}
                                        />
                                        <Bar
                                            dataKey="value"
                                            fill="#3b82f6"
                                            radius={[0, 4, 4, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Accuracy Rate */}
                        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className="text-blue-600 font-medium">Accuracy</p>
                                    <p className="text-sm text-gray-500">Rate</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-1">
                                        <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                                        <span className="text-xs text-gray-600">Intent Identification Rate</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                                        <span className="text-xs text-gray-600">Task Completion Rate</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-64 flex items-center justify-center">
                                <p className="text-gray-500 text-sm">Chart data loading...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoicingAIAnalytics;