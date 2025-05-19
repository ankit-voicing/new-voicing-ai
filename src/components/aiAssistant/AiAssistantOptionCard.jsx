

const AiAssistantOptionCard = ({ icon: Icon, title, description, isSelected, isDisabled, onClick }) => {
    return (
        <div
            className={`relative p-8 rounded-xl border transition-all duration-200 ease-in-out  flex flex-col items-center text-center h-full ${isSelected
                ? 'border-2 shadow-md'
                : 'border-gray-100 hover:border-gray-200 hover:shadow-sm'
                } ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
            style={{
                borderColor: isSelected ? '#5674F7' : undefined,
                backgroundColor: 'white'
            }}
            onClick={isDisabled ? null : onClick}
        >
            <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: isSelected ? '#5674F7' + '20' : '#f3f4f6' }}
            >
                <Icon
                    size={24}
                    style={{ color: isSelected ? '#5674F7' : '#64748b' }}
                />
            </div>

            <h3
                className="text-lg font-medium mb-2"
                style={{ color: isSelected ? '#5674F7' : '#18236B' }}
            >
                {title}
            </h3>

            <p className="text-sm text-gray-500">
                {description}
            </p>

            {isSelected && (
                <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#5674F7' }}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}
        </div>
    );
};
export default AiAssistantOptionCard