const SidebarLink = ({ path, icon, label, active, expanded }) => {
    return (
        <a href={path} className={`flex items-center cursor-pointer hover:text-blue-600 transition-colors w-full pr-4 ${active ? 'text-blue-600 ' : 'text-gray-600'}`}>
            <div className={`mr-2 max-w-1 min-w-1 w-full h-10 rounded-tr-lg rounded-br-lg ${active ? 'bg-primary' : 'bg-white'}`}></div>
            <div className={`flex items-center gap-4 w-full rounded-full p-4 hover:bg-primary-light`}>
                <div className="flex-shrink-0">{icon}</div>
                <span className={`text-base  whitespace-nowrap transition-opacity duration-300 ${expanded ? 'opacity-100 ' : 'opacity-0 hidden md:block'} ${active ? 'font-bold' : 'font-normal'}`}>
                    {label}
                </span>
            </div>
        </a >
    );
}
export default SidebarLink