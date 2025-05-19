import React, { useState } from 'react';
import {
    Bell,
    Home,
    Settings,
    User,
    LogOut,
    ChevronDown,
    X,
    Phone,
    Mic,
    PieChart,
    MessageSquare,
    Headphones,
    BarChart2,
    Edit,
    Plus,
    FileText,
    Copy
} from 'lucide-react';

const VoicingAI = () => {
    const [activeTab, setActiveTab] = useState('configure');
    const [advancedSettingsOpen, setAdvancedSettingsOpen] = useState(false);
    const [enableRecordings, setEnableRecordings] = useState(true);
    const [emotionRecognition, setEmotionRecognition] = useState(true);

    return (
        <div className="flex h-screen bg-gray-50">


            {/* Main Content */}
            <div className="flex-1 flex flex-col">


                {/* Content */}
                <div className="flex-1 p-6 flex gap-6">
                    <div className="flex-1">
                        {/* Tabs */}
                        <div className="border-b border-gray-200 mb-6">
                            <div className="flex">
                                <button
                                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'configure' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                                    onClick={() => setActiveTab('configure')}
                                >
                                    Configure
                                </button>
                                <button
                                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'prompt' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                                    onClick={() => setActiveTab('prompt')}
                                >
                                    Prompt
                                </button>
                            </div>
                        </div>

                        {activeTab === 'configure' ? (
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                {/* Assistant Configuration */}
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                                            Name
                                            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-500">?</div>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            placeholder="My outbound assistant"
                                            value="My outbound assistant"
                                        />
                                    </div>

                                    <div>
                                        <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                                            Select voice
                                            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-500">?</div>
                                        </label>
                                        <div className="relative">
                                            <select className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 pr-8">
                                                <option>Natasha - Business Professional</option>
                                            </select>
                                            <ChevronDown size={16} className="absolute right-2 top-3 text-gray-500" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                                            Language
                                            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-500">?</div>
                                        </label>
                                        <div className="relative">
                                            <select className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 pr-8">
                                                <option>English | US</option>
                                            </select>
                                            <ChevronDown size={16} className="absolute right-2 top-3 text-gray-500" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                                            Call type
                                            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-500">?</div>
                                        </label>
                                        <div className="relative">
                                            <select className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 pr-8">
                                                <option>Outbound</option>
                                            </select>
                                            <ChevronDown size={16} className="absolute right-2 top-3 text-gray-500" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                                            Choose your Script (or) Pathway
                                            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-500">?</div>
                                        </label>
                                        <div className="relative">
                                            <select className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 pr-8">
                                                <option>Example:17...657890</option>
                                            </select>
                                            <ChevronDown size={16} className="absolute right-2 top-3 text-gray-500" />
                                        </div>
                                    </div>
                                </div>

                                {/* Advanced Settings */}
                                <div className="border border-gray-200 rounded-md mb-6">
                                    <button
                                        className="w-full p-3 flex items-center justify-between text-sm font-medium text-gray-700"
                                        onClick={() => setAdvancedSettingsOpen(!advancedSettingsOpen)}
                                    >
                                        Advanced Settings
                                        <ChevronDown size={16} className={`text-gray-500 transform ${advancedSettingsOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {advancedSettingsOpen && (
                                        <div className="p-3 border-t border-gray-200">
                                            <div className="text-sm text-gray-600 p-2 bg-blue-50 rounded flex items-center">
                                                <span>There is a mismatch between the assistant's language settings and the voice language.</span>
                                                <button className="ml-1 text-blue-600 font-medium">Update for optimal performance.</button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Custom greeting */}
                                <div className="mb-6">
                                    <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                                        Custom greeting
                                        <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-500">?</div>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="Hello there!"
                                        value="Hello there!"
                                    />
                                </div>

                                {/* Toggles */}
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm font-medium text-gray-700">Enable recordings</span>
                                            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-500">?</div>
                                        </div>
                                        <button
                                            className={`w-12 h-6 rounded-full flex items-center p-1 ${enableRecordings ? 'bg-blue-600 justify-end' : 'bg-gray-200 justify-start'}`}
                                            onClick={() => setEnableRecordings(!enableRecordings)}
                                        >
                                            <div className="w-4 h-4 rounded-full bg-white"></div>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm font-medium text-gray-700">Emotion Recognition</span>
                                            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-500">?</div>
                                        </div>
                                        <button
                                            className={`w-12 h-6 rounded-full flex items-center p-1 ${emotionRecognition ? 'bg-blue-600 justify-end' : 'bg-gray-200 justify-start'}`}
                                            onClick={() => setEmotionRecognition(!emotionRecognition)}
                                        >
                                            <div className="w-4 h-4 rounded-full bg-white"></div>
                                        </button>
                                    </div>
                                </div>

                                {/* Pronunciation Guide */}
                                <div className="border border-gray-200 rounded-md p-4 mb-6">
                                    <h3 className="text-sm font-medium text-gray-700 mb-2">Pronunciation Guide</h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        The pronunciation guide is an array of objects that guides the LLM on how to say specific words. This is great for situations with complicated terms or names.
                                    </p>
                                    <button className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                                        <Plus size={16} />
                                        Word
                                    </button>
                                </div>

                                {/* Metadata */}
                                <div className="border border-gray-200 rounded-md p-4">
                                    <h3 className="text-sm font-medium text-gray-700 mb-2">Metadata</h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Add any additional information you want to associate with the call. This can be useful for tracking or categorizing calls. Anything that you put here will be returned in your webhook or in the call details under metadata.
                                    </p>
                                    <button className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                                        <Plus size={16} />
                                        Add Metadata
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                {/* Prompt Tab Content */}
                                <div className="mb-6">
                                    <h2 className="text-sm font-medium text-gray-700 mb-3">Upload Knowledge Base</h2>
                                    <button className="w-full border border-dashed border-gray-300 rounded-md p-4 flex items-center justify-center gap-2 text-gray-500 hover:bg-gray-50">
                                        <Plus size={18} />
                                        <span>Add Knowledge base</span>
                                    </button>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h2 className="text-sm font-medium text-gray-700">Prompt</h2>
                                        <div className="flex gap-2">
                                            <button className="flex items-center gap-1 text-sm text-gray-600 border border-gray-200 rounded-md px-3 py-1">
                                                <FileText size={14} />
                                                Prompting Guidelines
                                            </button>
                                            <button className="flex items-center gap-1 text-sm text-gray-600 border border-gray-200 rounded-md px-3 py-1">
                                                <Copy size={14} />
                                                Use a template
                                            </button>
                                            <button className="flex items-center gap-1 text-sm text-gray-600 border border-gray-200 rounded-md px-3 py-1">
                                                <MessageSquare size={14} />
                                                Ask Copilot
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
                                        <h3 className="text-sm font-medium text-gray-700 mb-2">CloudInnovate - Outbound Sales Call Script</h3>

                                        <h4 className="text-xs font-medium text-gray-600 mt-4 mb-1">BACKGROUND INFO:</h4>
                                        <p className="text-sm text-gray-700 mb-3">
                                            Introduction: You are Jordan, a Senior Sales Representative at CloudInnovate, focusing on businesses interested in enhancing their project management with cloud-based solutions. Your mission is to introduce them to CloudInnovate's comprehensive suite designed to improve collaboration, efficiency, and project tracking.
                                        </p>

                                        <p className="text-sm text-gray-700 mb-3">
                                            Product Information: CloudInnovate offers an array of tools encompassing task management, time tracking, resource allocation, and analytics.
                                            It's celebrated for its intuitive interface, seamless integrations, and stellar customer support.
                                        </p>

                                        <p className="text-sm text-gray-700 mb-3">
                                            Target Audience: Businesses leveraging substantial cloud infrastructure aiming to refine their project management practices.
                                        </p>

                                        <p className="text-sm text-gray-700 mb-3">
                                            Value Proposition: CloudInnovate aids in optimizing cloud operations, achieving cost savings, and boosting performance.
                                        </p>

                                        <p className="text-sm text-gray-700 mb-3">
                                            Location Note: Mention CloudInnovate's New York headquarters and your Austin, Texas remote work setup only if queried about location.
                                        </p>

                                        <h4 className="text-xs font-medium text-gray-600 mt-4 mb-1">OBJECTION HANDLING INSTRUCTIONS:</h4>

                                        <p className="text-sm text-gray-700 mb-3">
                                            Already Using a Project Management Tool:
                                            <br />- Instruction: Engage them about their current experience, useful features, and any challenges. Present CloudInnovate's distinguishing features and suggest a personalized demo.
                                        </p>

                                        <p className="text-sm text-gray-700 mb-3">
                                            ### New to Project Management Software:
                                            <br />- Instruction: Highlight CloudInnovate's benefits, share success stories, and propose a free trial for firsthand experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Test Assistant Panel */}
                    <div className="w-80 bg-white shadow-sm border border-gray-100 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-6">
                            <FileText size={18} className="text-blue-600" />
                            <h2 className="text-lg font-medium text-gray-800">Test your assistant</h2>
                        </div>

                        <div className="mb-4">
                            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                                Name
                                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-500">?</div>
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="My outbound assistant"
                                value="My outbound assistant"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-2">
                                Select phone number
                            </label>
                            <div className="relative">
                                <select className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 pr-8">
                                    <option>Select phone number</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-2 top-3 text-gray-500" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                <div className="flex items-center gap-1 px-2 bg-gray-100 border-r border-gray-300">
                                    <img src="/api/placeholder/24/16" alt="India flag" className="w-6 h-4" />
                                    <span className="text-sm text-gray-700">+91</span>
                                </div>
                                <input
                                    type="text"
                                    className="flex-1 p-2 focus:outline-none"
                                    placeholder="Phone number"
                                    value="9876543210"
                                />
                            </div>
                        </div>

                        <button className="w-full bg-white border border-blue-600 text-blue-600 rounded-md py-2 px-4 flex items-center justify-center gap-2 font-medium hover:bg-blue-50">
                            <Phone size={18} />
                            Call me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoicingAI;