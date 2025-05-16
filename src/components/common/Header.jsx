
const Header = () => {
    return (
        <header className="bg-white px-7 py-4 flex items-center justify-between border-b border-gray-100 sticky top-0 z-10">
            <h2 className="text-xl font-bold  text-black">Voicing <span className="text-primary">AI</span></h2>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                        R
                    </div>
                    <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
            </div>
        </header>
    )
}

export default Header