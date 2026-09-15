function SearchPortfolio({ onCategoryChange }) {
    const categories = ["All", "Web Design", "Photography", "Illustration", "Branding"];

    return (
        <div className="flex flex-wrap items-center justify-center gap-3 p-5 md:p-2">
            {categories.map((category) => (
                <button
                    key={category}
                    type="button"
                    value={category}
                    onClick={(e) => onCategoryChange(e.currentTarget.value)}
                    className="rounded cursor-pointer px-4 py-2 text-sm font-medium transition-colors hover:bg-[#2bb6b6] hover:text-white"
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default SearchPortfolio;