import React from "react";

interface InsightRollProps {
    insights: string[];
}

const InsightRoll: React.FC<InsightRollProps> = ({ insights }) => {
    return (
        <div className="w-full bg-gradient-to-r from-green-600 to-[#64ff4c] dark:bg-[#64ff4c] text-white dark:text-dark overflow-hidden">
            <div className="animate-roll whitespace-nowrap py-2 sm:py-3 flex items-center justify-start capitalize font-semibold tracking-wider text-sm sm:text-base">
                {insights.map((text) => (
                    <div key={text} className="flex-shrink-0 px-4">
                        {text} <span>|</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InsightRoll;
