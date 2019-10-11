import { useEffect, useRef } from 'react';
import resizeObserver from 'src/utils/resizeObserver';
import echarts from '../echarts';

// chart 的 hook
export default function useChart(container, { theme }) {
  const chart = useRef(null);

  useEffect(() => {
    const instance = echarts.init(container.current, theme);

    chart.current = instance;

    resizeObserver.add(container.current, (params) => {
      instance.resize(params);
    });

    return () => {
      instance.dispose();
      resizeObserver.clear(container.current);
    };
  }, [theme]);

  return chart;
}