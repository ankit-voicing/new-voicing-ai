import React, { useState } from 'react';
import {
    Bell,
    Home,
    Settings,
    User,
    LogOut,
    ChevronDown,
    Search,
    Filter,
    PieChart,
    MessageSquare,
    Headphones,
    BarChart2,
    Eye,
    Phone,
    CheckCircle
} from 'lucide-react';

const callLogsData = [
    {
        id: 1,
        createdOn: '9/2/2024 (12:42 AM)',
        direction: 'outbound',
        to: '+918951870056',
        from: '+16198534219',
        transferredTo: '-',
        recording: '-',
        status: 'Completed'
    },
    {
        id: 2,
        createdOn: '9/2/2024 (12:42 AM)',
        direction: 'outbound',
        to: '+918951870056',
        from: '+16198534219',
        transferredTo: '-',
        recording: '-',
        status: 'Completed'
    },
    {
        id: 3,
        createdOn: '9/2/2024 (12:42 AM)',
        direction: 'outbound',
        to: '+918951870056',
        from: '+16198534219',
        transferredTo: '-',
        recording: '-',
        status: 'Completed'
    },
    {
        id: 4,
        createdOn: '9/2/2024 (12:42 AM)',
        direction: 'outbound',
        to: '+918951870056',
        from: '+16198534219',
        transferredTo: '-',
        recording: '-',
        status: 'Completed'
    },
    {
        id: 5,
        createdOn: '9/2/2024 (12:42 AM)',
        direction: 'outbound',
        to: '+918951870056',
        from: '+16198534219',
        transferredTo: '-',
        recording: '-',
        status: 'Completed'
    },
    {
        id: 6,
        createdOn: '9/2/2024 (12:42 AM)',
        direction: 'outbound',
        to: '+918951870056',
        from: '+16198534219',
        transferredTo: '-',
        recording: '-',
        status: 'Completed'
    },
    {
        id: 7,
        createdOn: '9/2/2024 (12:42 AM)',
        direction: 'outbound',
        to: '+918951870056',
        from: '+16198534219',
        transferredTo: '-',
        recording: '-',
        status: 'Completed'
    },
    {
        id: 8,
        createdOn: '9/2/2024 (12:42 AM)',
        direction: 'outbound',
        to: '+918951870056',
        from: '+16198534219',
        transferredTo: '-',
        recording: '-',
        status: 'Completed'
    },
    {
        id: 9,
        createdOn: '9/2/2024 (12:42 AM)',
        direction: 'outbound',
        to: '+918951870056',
        from: '+16198534219',
        transferredTo: '-',
        recording: '-',
        status: 'Completed'
    },
    {
        id: 10,
        createdOn: '9/2/2024 (12:42 AM)',
        direction: 'outbound',
        to: '+918951870056',
        from: '+16198534219',
        transferredTo: '-',
        recording: '-',
        status: 'Completed'
    },
    {
        id: 11,
        createdOn: '9/2/2024 (12:42 AM)',
        direction: 'outbound',
        to: '+918951870056',
        from: '+16198534219',
        transferredTo: '-',
        recording: '-',
        status: 'Completed'
    }
];

const VoicingAICallLogs = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleSelectAll = () => {
        if (selectedRows.length === callLogsData.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(callLogsData.map(call => call.id));
        }
    };

    const toggleSelectRow = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    return (
        <div className="flex h-screen bg-gray-50">


            <div className="flex-1 flex flex-col">


                {/* Content */}
                <div className="flex-1 p-6">
                    {/* Page Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-medium">
                            <span className="text-gray-800">Call</span>
                            <span className="text-blue-600 ml-1">Logs</span>
                        </h2>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-64"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Search size={16} className="absolute left-3 top-3 text-gray-400" />
                            </div>
                            <button className="px-3 py-2 text-gray-600 border border-gray-300 hover:bg-gray-50 rounded-md flex items-center gap-2">
                                <span className="text-sm">View Analytics & Call Insights</span>
                            </button>
                            <button className="p-2 text-gray-600 border border-gray-300 hover:bg-gray-50 rounded-md">
                                <Filter size={16} />
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md text-sm font-medium">
                                Analytics
                            </button>
                        </div>
                    </div>

                    {/* Call Logs Table */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-4 py-3 text-left">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 rounded"
                                                checked={selectedRows.length === callLogsData.length}
                                                onChange={toggleSelectAll}
                                            />
                                        </div>
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Created On</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Direction</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">To</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">From</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Transferred To</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Recording</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Pathway Logs</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Transcript</th>
                                </tr>
                            </thead>
                            <tbody>
                                {callLogsData.map((call) => (
                                    <tr
                                        key={call.id}
                                        className="border-b border-gray-200 hover:bg-gray-50"
                                    >
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 rounded"
                                                    checked={selectedRows.includes(call.id)}
                                                    onChange={() => toggleSelectRow(call.id)}
                                                />
                                                <button className="text-gray-400 hover:text-gray-600">
                                                    <Eye size={16} />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{call.createdOn}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{call.direction}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{call.to}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{call.from}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{call.transferredTo}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{call.recording}</td>
                                        <td className="px-4 py-3">
                                            <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full flex items-center gap-1 w-fit">
                                                <CheckCircle size={12} />
                                                {call.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <button className="text-blue-600 text-sm hover:text-blue-800">
                                                View
                                            </button>
                                        </td>
                                        <td className="px-4 py-3">
                                            <button className="text-blue-600 text-sm hover:text-blue-800">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoicingAICallLogs;