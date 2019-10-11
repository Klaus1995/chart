import { useEffect, useRef } from 'react';
import resizeObserver from 'src/utils/resizeObserver';
import echarts from '../echarts';

// chart 的 hook
export default function useChart(container, { theme }) {
  const chart = useRef(null);

  useEffect(() => {
    // 注册
    const myChart = echarts.init(container.current, theme);
    chart.current = myChart;

    // 绑定resize事件
    resizeObserver.add(container.current, (params) => {
      myChart.resize(params);
    });

    // 注销
    return () => {
      myChart.dispose();
      resizeObserver.clear(myChart);
    };
  }, [container, theme]);

  return chart;
}