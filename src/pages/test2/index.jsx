import { useState } from 'react';
import { FileText, Zap, Layout, X } from 'lucide-react';

const AssistantCreationUI = () => {
    const [selectedOption, setSelectedOption] = useState('scratch');
    const [isDisabled, setIsDisabled] = useState({
        scratch: false,
        quick: false,
        templates: false
    });

    const toggleDisabled = (option) => {
        setIsDisabled({
            ...isDisabled,
            [option]: !isDisabled[option]
        });
    };

    return (
        <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto relative">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">
                    <span className="text-gray-700">Create </span>
                    <span className="text-blue-600">New Assistant</span>
                </h1>
                <p className="text-gray-600 text-lg">Choose How You Want To Start Building An Assistant</p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {/* Start from scratch option */}
                <OptionCard
                    icon={<FileText size={28} className="text-gray-500" />}
                    title="Start from scratch"
                    description="Build Your AI Assistant From Scratch"
                    isSelected={selectedOption === 'scratch'}
                    isDisabled={isDisabled.scratch}
                    onClick={() => setSelectedOption('scratch')}
                    onToggleDisabled={() => toggleDisabled('scratch')}
                />

                {/* Quick Assistant Setup option */}
                <OptionCard
                    icon={<Zap size={28} className="text-gray-500" />}
                    title="Quick Assistant Setup"
                    description="Select From Presets To Simplify Setup"
                    isSelected={selectedOption === 'quick'}
                    isDisabled={isDisabled.quick}
                    onClick={() => setSelectedOption('quick')}
                    onToggleDisabled={() => toggleDisabled('quick')}
                />

                {/* Browse our Templates option */}
                <OptionCard
                    icon={<Layout size={28} className="text-gray-500" />}
                    title="Browse our Templates"
                    description="Start With Inspiration From Our Templates"
                    isSelected={selectedOption === 'templates'}
                    isDisabled={isDisabled.templates}
                    onClick={() => setSelectedOption('templates')}
                    onToggleDisabled={() => toggleDisabled('templates')}
                />
            </div>

            {/* Next step button */}
            <div className="flex justify-center">
                <button className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-8 rounded-full">
                    Next step
                </button>
            </div>
        </div>
    );
};



export default AssistantCreationUI;