import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(1);

    const increament = () => {
        setCount((prevCount) => prevCount * 2);
    };
    const decreament = () => {
        setCount((prevCount) => prevCount / 2);
    };

    return (
        <div
            class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div class="text-2xl font-semibold">{count}</div>
            <div class="flex space-x-3">
                <button
                    class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increament}
                >
                    Incrementtt
                </button>
                <button
                    class="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decreament}
                >
                    Decrement
                </button>
            </div>
        </div>

    );
};

export default Counter;