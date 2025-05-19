import { useState } from 'react';
import { Search, Settings, Home, User, Bell, Mic, BarChart, Clipboard, LogOut, Plus } from 'lucide-react';
import CreateAssistantModal from '../test';

// Configurable color theme
const useTheme = (initialTheme = {
    primary: '#4f46e5',
    secondary: '#f3f4f6',
    text: '#1f2937',
    background: '#ffffff',
    sidebar: '#f9fafb',
    card: '#ffffff',
    hover: '#eef2ff'
}) => {
    const [theme, setTheme] = useState(initialTheme);

    const updateTheme = (newTheme) => {
        setTheme({ ...theme, ...newTheme });
    };

    return [theme, updateTheme];
};

const SidebarItem = ({ icon: Icon, active }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`flex items-center justify-center p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out mb-2 ${active ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Icon size={20} />
        </div>
    );
};

const Card = ({ title, tags, onClick, theme }) => {
    return (
        <div
            className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out cursor-pointer flex flex-col gap-4 bg-white"
            onClick={onClick}
            style={{ backgroundColor: theme.card }}
        >
            <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500">Recruiter</div>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src="/api/placeholder/40/40" alt="Avatar" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="font-medium text-lg" style={{ color: theme.text }}>{title}</div>

            <div className="flex flex-wrap gap-2 mt-1">
                {tags.map((tag, index) => (
                    <div key={index} className="flex items-center gap-1">
                        <span className="text-xs text-gray-600">{tag.label}:</span>
                        <span className="text-xs font-medium" style={{ color: theme.primary }}>{tag.value}</span>
                    </div>
                ))}
            </div>

            <button
                className="mt-2 py-2 px-4 rounded-lg text-sm font-medium text-center transition-colors duration-200 ease-in-out"
                style={{
                    backgroundColor: theme.secondary,
                    color: theme.primary
                }}
            >
                View Agent
            </button>
        </div>
    );
};

export default function AiAssistant() {
    const [theme, updateTheme] = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const cards = [
        {
            title: 'Chris-Classroom',
            tags: [
                { label: 'Tagged to', value: 'Script Name' },
                { label: 'Voice', value: 'Natasha' },
                { label: 'Language', value: 'English' }
            ]
        },
        {
            title: 'Chris-Classroom',
            tags: [
                { label: 'Tagged to', value: 'Script Name' },
                { label: 'Voice', value: 'Natasha' },
                { label: 'Language', value: 'English' }
            ]
        },
        {
            title: 'Chris-Classroom',
            tags: [
                { label: 'Tagged to', value: 'Script Name' },
                { label: 'Voice', value: 'Natasha' },
                { label: 'Language', value: 'English' }
            ]
        }
    ];

    return (


        <div className="flex-1 p-8">
            <button
                className="w-fit p-6 rounded-xl border border-gray-100 mb-10 flex flex-col items-center justify-center gap-4 bg-white"
                style={{ backgroundColor: theme.card }}
                onClick={() => setModalIsOpen(true)}
            >
                <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: theme.primary }}
                >
                    <Plus size={20} color="white" />
                </div>

                <div className="text-center">
                    <div className="font-medium text-lg mb-1">
                        <span style={{ color: theme.text }}>Create </span>
                        <span style={{ color: theme.primary }}>AI assistant</span>
                    </div>
                    <p className="text-sm text-gray-500">
                        Here will appear your assistant<br />
                        Press Create to get start
                    </p>
                </div>
            </button>

            {/* Assistants Section */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-1">
                        <div className="font-medium text-lg" style={{ color: theme.text }}>Your</div>
                        <div className="font-medium text-lg" style={{ color: theme.primary }}>Assistants</div>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-64"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <Card key={index} {...card} theme={theme} onClick={() => console.log('Card clicked')} />
                    ))}
                </div>
            </div>

            <CreateAssistantModal
                open={modalIsOpen}
                toggleOpen={() => setModalIsOpen(false)} />
        </div>
    );
}