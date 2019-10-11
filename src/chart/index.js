import React, { useRef } from 'react';
import useChart from './hooks/useChart';
import useOption from './hooks/userOption';

export default function Chart({ option, theme }) {
    const container = useRef(null);

    const chart = useChart(container, { theme });

    useOption(chart, option);

    return (
        <div ref={container} style={{ width: '100%', height: '100%' }}></div>
    );
}
