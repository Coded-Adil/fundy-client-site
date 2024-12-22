import React, { useEffect, useState } from "react";

function AnimatedNum({ toValue, duration }) {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); 
            const value = Math.floor(progress * toValue); 
            setCurrentValue(value);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [toValue, duration]);

    return (
        <div className="text-4xl font-bold">
            {currentValue.toLocaleString()}
        </div>
    );
}

export default AnimatedNum;