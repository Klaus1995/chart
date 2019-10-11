import React, { useRef, useEffect } from 'react';
import echarts from 'echarts';
import resizeObserver from 'src/utils/resizeObserver';

export default function Chart() {
    const container = useRef(null);

    useEffect(() => {
        const myChart = echarts.init(container.current);
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        myChart.setOption(option);

        resizeObserver.add(container.current, (params) => {
            myChart.resize(params);
        });

        return () => {
            myChart.dispose();
            resizeObserver.clear(container.current);
        };
    }, []);

    return (
        <div ref={container} style={{ width: '100%', height: '100%' }}></div>
    );
}
