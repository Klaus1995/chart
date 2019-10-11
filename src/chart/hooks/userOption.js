import { useEffect } from 'react';

export default function useOption(chart, option) {
  useEffect(() => {
    if (chart.current) {
      chart.current.setOption(option);
    }
  }, [chart, option]);
}
