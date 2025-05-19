import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info, Phone, Edit, X, ChevronRight, Bell } from 'lucide-react';
import { Plus, FileText, Layout, MessageSquare } from 'lucide-react';

const CreateAssistant = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [advancedSettingsOpen, setAdvancedSettingsOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50">

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                {/* <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="font-semibold text-blue-600 text-lg flex items-center">
                            <span>Voicing</span>
                            <span className="text-indigo-600 ml-1">AI</span>
                        </div>
                        <div className="mx-2 text-gray-300">|</div>
                        <nav className="flex items-center text-sm">
                            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
                            <a href="#" className="text-gray-600 hover:text-gray-900">Assistant</a>
                            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
                            <span className="text-gray-800">My outbound assistant</span>
                            <Edit className="h-4 w-4 ml-1 text-gray-400" />
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100 relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-600"></span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                            R
                        </div>
                    </div>
                </header> */}

                {/* Tab Bar */}
                <div className="bg-white border-b border-gray-200">
                    <div className="flex gap-5 px-6">
                        <button className={`py-4 px-2 border-b-[3px] font-medium text-sm ${selectedTab == 1 ? 'border-blue-600 text-blue-600' : 'text-gray-500 border-transparent'}`} onClick={() => setSelectedTab(1)}>
                            Configure
                        </button>
                        <button className={`py-4 px-2 border-b-[3px] font-medium text-sm ${selectedTab === 2 ? 'border-blue-600 text-blue-600' : 'text-gray-500 border-transparent'}`} onClick={() => setSelectedTab(2)}>
                            Prompt
                        </button>
                    </div>
                </div>

                {/* Main Container */}
                <div className="flex flex-1 p-6 gap-6">
                    {/* Left Panel - Configuration Form */}
                    {selectedTab == 1 &&
                        <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-6">
                                {/* Name Field */}
                                <div className="mb-6">
                                    <div className="flex items-center mb-2">
                                        <label className="text-sm font-medium text-gray-700">Name</label>
                                        <Info className="h-4 w-4 ml-1 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value="My outbound assistant"
                                    />
                                </div>

                                {/* Voice and Language Selection */}
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <div className="flex items-center mb-2">
                                            <label className="text-sm font-medium text-gray-700">Select voice</label>
                                            <Info className="h-4 w-4 ml-1 text-gray-400" />
                                        </div>
                                        <div className="relative">
                                            <div className="w-full flex items-center px-3 py-2 border border-gray-300 rounded-md">
                                                <span className="flex-grow text-sm">Natasha - Business Professional</span>
                                                <div className="flex items-center">
                                                    <button className="text-gray-400 hover:text-gray-500">
                                                        <X className="h-4 w-4" />
                                                    </button>
                                                    <button className="text-gray-400 hover:text-gray-500 ml-1">
                                                        <ChevronDown className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center mb-2">
                                            <label className="text-sm font-medium text-gray-700">Language</label>
                                            <Info className="h-4 w-4 ml-1 text-gray-400" />
                                        </div>
                                        <div className="relative">
                                            <div className="w-full flex items-center px-3 py-2 border border-gray-300 rounded-md">
                                                <span className="flex-grow text-sm">English | US</span>
                                                <div className="flex items-center">
                                                    <button className="text-gray-400 hover:text-gray-500">
                                                        <X className="h-4 w-4" />
                                                    </button>
                                                    <button className="text-gray-400 hover:text-gray-500 ml-1">
                                                        <ChevronDown className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Script and Call Type */}
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <div className="flex items-center mb-2">
                                            <label className="text-sm font-medium text-gray-700">Choose your Script (or) Pathway</label>
                                            <Info className="h-4 w-4 ml-1 text-gray-400" />
                                        </div>
                                        <div className="relative">
                                            <div className="w-full flex items-center px-3 py-2 border border-gray-300 rounded-md">
                                                <span className="flex-grow text-sm">Example:17...657890</span>
                                                <div className="flex items-center">
                                                    <button className="text-gray-400 hover:text-gray-500">
                                                        <X className="h-4 w-4" />
                                                    </button>
                                                    <button className="text-gray-400 hover:text-gray-500 ml-1">
                                                        <ChevronDown className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center mb-2">
                                            <label className="text-sm font-medium text-gray-700">Call type</label>
                                            <Info className="h-4 w-4 ml-1 text-gray-400" />
                                        </div>
                                        <div className="relative">
                                            <div className="w-full flex items-center px-3 py-2 border border-gray-300 rounded-md">
                                                <span className="flex-grow text-sm">Outbound</span>
                                                <div className="flex items-center">
                                                    <button className="text-gray-400 hover:text-gray-500">
                                                        <X className="h-4 w-4" />
                                                    </button>
                                                    <button className="text-gray-400 hover:text-gray-500 ml-1">
                                                        <ChevronDown className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Advanced Settings */}
                                <div className="mb-6">
                                    <button
                                        className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                                        onClick={() => setAdvancedSettingsOpen(!advancedSettingsOpen)}
                                    >
                                        <span className="text-blue-600 font-medium">Advanced Settings</span>
                                        {advancedSettingsOpen ? (
                                            <ChevronUp className="h-5 w-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-gray-500" />
                                        )}
                                    </button>
                                </div>

                                {/* Language Mismatch Warning */}
                                <div className="mb-6 p-3 bg-blue-50 text-sm text-gray-600 rounded-md flex items-center justify-between">
                                    <span>There is a mismatch between the assistant's language settings and the voice language.</span>
                                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Update for optimal performance.</a>
                                </div>

                                {/* Custom Greeting */}
                                <div className="mb-6">
                                    <div className="flex items-center mb-2">
                                        <label className="text-sm font-medium text-gray-700">Custom greeting</label>
                                        <Info className="h-4 w-4 ml-1 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value="Hello there!"
                                    />
                                </div>

                                {/* Recordings and Emotion Recognition */}
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <label className="text-sm font-medium text-gray-700">Enable recordings</label>
                                                <Info className="h-4 w-4 ml-1 text-gray-400" />
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <label className="text-sm font-medium text-gray-700">Emotion Recognition</label>
                                                <Info className="h-4 w-4 ml-1 text-gray-400" />
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Pronunciation Guide */}
                                <div className="mb-6 border border-gray-200 rounded-lg p-4">
                                    <h3 className="text-sm font-medium text-gray-800 mb-2">Pronunciation Guide</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        The pronunciation guide is an array of objects that guides the LLM on how to say specific words. This is great for situations with complicated terms or names.
                                    </p>
                                    <button className="flex items-center text-blue-600 text-sm font-medium">
                                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                        </svg>
                                        Word
                                    </button>
                                </div>

                                {/* Metadata */}
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <h3 className="text-sm font-medium text-gray-800 mb-2">Metadata</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Add any additional information you want to associate with the call. This can be useful for tracking or categorizing calls. Anything that you put here will be returned in your webhook or in the call details under metadata.
                                    </p>
                                    <button className="flex items-center text-blue-600 text-sm font-medium">
                                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                        </svg>
                                        Add Metadata
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                    {selectedTab === 2 &&
                        <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-6">
                                {/* Upload Knowledge Base */}
                                <div className="mb-6">
                                    <h3 className="text-base font-medium text-gray-800 mb-3">Upload Knowledge Base</h3>
                                    <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center">
                                        <button className="flex items-center text-blue-600 text-sm font-medium">
                                            <Plus className="h-5 w-5 text-gray-500 mr-2" />
                                            Add Knowledge base
                                        </button>
                                    </div>
                                </div>

                                {/* Prompt Section */}
                                <div className="mb-6">
                                    <h3 className="text-base font-medium text-gray-800 mb-3">Prompt</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        You are Chris Haroun, an experienced educator and the...
                                    </p>
                                </div>

                                {/* Prompt Helper Tools */}
                                <div className="flex gap-4 mb-6">
                                    <button className="flex items-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-sm text-gray-700 hover:bg-gray-50">
                                        <Layout className="h-4 w-4" />
                                        Prompting Guidelines
                                    </button>
                                    <button className="flex items-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-sm text-gray-700 hover:bg-gray-50">
                                        <FileText className="h-4 w-4" />
                                        Use a template
                                    </button>
                                    <button className="flex items-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-sm text-gray-700 hover:bg-gray-50">
                                        <MessageSquare className="h-4 w-4" />
                                        Ask Copilot
                                    </button>
                                </div>

                                {/* Script Content */}
                                <div className="bg-gray-50 rounded-md p-6">
                                    <h3 className="text-base font-medium text-gray-800 mb-3">CloudInnovate - Outbound Sales Call Script</h3>

                                    <div className="text-gray-600 text-sm space-y-5">
                                        <p className="font-medium">BACKGROUND INFO:</p>

                                        <p>Introduction: You are Jordan, a Senior Sales Representative at CloudInnovate, focusing on businesses interested in enhancing their project management with cloud-based solutions. Your mission is to introduce them to CloudInnovate's comprehensive suite designed to improve collaboration, efficiency, and project tracking.</p>

                                        <p>Product Information: CloudInnovate offers an array of tools encompassing task management, time tracking, resource allocation, and analytics.<br />
                                            It's celebrated for its intuitive interface, seamless integrations, and stellar customer support.</p>

                                        <p>Target Audience: Businesses leveraging substantial cloud infrastructure aiming to refine their project management practices.</p>

                                        <p>Value Proposition: CloudInnovate aids in optimizing cloud operations, achieving cost savings, and boosting performance.</p>

                                        <p>Location Note: Mention CloudInnovate's New York headquarters and your Austin, Texas remote work setup only if queried about location.</p>

                                        <p className="font-medium">OBJECTION HANDLING INSTRUCTIONS:</p>

                                        <p>Already Using a Project Management Tool:<br />
                                            - Instruction: Engage them about their current experience, useful features, and any challenges. Present CloudInnovate's distinguishing features<br />
                                            and suggest a personalized demo.</p>

                                        <p>### New to Project Management Software:<br />
                                            - Instruction: Highlight CloudInnovate's benefits, share success stories, and propose a free trial for firsthand experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {/* Right Panel - Test Your Assistant */}
                    <div className="w-80 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <div className="p-6">
                            <div className="flex items-center mb-6">
                                <div className="p-2 bg-blue-100 rounded-md text-blue-600 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h2 className="text-lg font-medium text-gray-800">Test your assistant</h2>
                            </div>

                            {/* Name */}
                            <div className="mb-4">
                                <div className="flex items-center mb-2">
                                    <label className="text-sm font-medium text-gray-700">Name</label>
                                    <Info className="h-4 w-4 ml-1 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value="My outbound assistant"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="mb-4">
                                <div className="relative">
                                    <div className="w-full flex items-center px-3 py-2 border border-gray-300 rounded-md">
                                        <span className="flex-grow text-sm text-gray-500">Select phone number</span>
                                        <ChevronDown className="h-4 w-4 text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Country Code */}
                            <div className="mb-6">
                                <div className="flex">
                                    <div className="w-20 border border-gray-300 rounded-l-md flex items-center px-2">
                                        <div className="w-6 h-4 bg-orange-500 relative">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-6 h-1 bg-white"></div>
                                                <div className="absolute w-6 h-1 bg-white transform rotate-90"></div>
                                            </div>
                                        </div>
                                        <span className="ml-1 text-sm">+91</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value="9876543210"
                                    />
                                </div>
                            </div>

                            {/* Call Button */}
                            <button className="w-full bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-4 border border-blue-600 rounded-md flex items-center justify-center">
                                <Phone className="h-5 w-5 mr-2" />
                                Call me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAssistant;

