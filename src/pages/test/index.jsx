import { useState } from 'react';
import { X, FileText, Zap, LayoutGrid, ChevronRight } from 'lucide-react';
import Modal from '../../components/common/Modal';
import AiAssistantOptionCard from '../../components/aiAssistant/AiAssistantOptionCard';
import { useNavigate } from 'react-router-dom';





export default function CreateAssistantModal({ open, toggleOpen }) {
    const navigate = useNavigate()

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        {
            id: 'scratch',
            icon: FileText,
            title: 'Start from scratch',
            description: 'Build Your AI Assistant From Scratch'
        },

        {
            id: 'templates',
            icon: LayoutGrid,
            title: 'Browse our Templates',
            description: 'Start With Inspiration From Our Templates'
        }
    ];

    return (
        <div >

            {/* Modal Container */}
            <Modal open={open} title={'create'} toggleOpen={toggleOpen} options={options} >
                <div className="p-8">
                    <div className="flex justify-center gap-10">
                        {options.length > 0 && options?.map((option, index) => (
                            <AiAssistantOptionCard
                                key={option.id}
                                icon={option.icon}
                                title={option.title}
                                isDisabled={option?.id == 'templates'}
                                description={option.description}
                                isSelected={selectedOption === option.id}
                                onClick={() => setSelectedOption(option.id)}
                            />
                        ))}
                    </div>
                    <div className="p-6 flex justify-center mt-10" style={{ borderColor: '#f3f4f6' }}>
                        <button
                            onClick={() => navigate('/create-assistant')}
                            className={`py-2.5 px-8 rounded-full flex items-center justify-center gap-2 text-white font-medium transition-all duration-200 bg-gradient-to-r from-[#2FA5F6] to-[#4318FF]  ${selectedOption ? 'opacity-100 ' : 'opacity-60 cursor-not-allowed'
                                }`}
                            disabled={!selectedOption}
                        >
                            Next step
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}