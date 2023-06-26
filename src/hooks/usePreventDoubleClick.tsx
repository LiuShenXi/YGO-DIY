import { useEffect, useRef } from 'react';

// 自定义Hook，使用在需要阻止双击事件的元素上
function usePreventDoubleClick() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const preventDoubleClick = (e) => e.preventDefault();
      element.addEventListener('dblclick', preventDoubleClick);

      // 在组件卸载时移除事件监听器
      return () => element.removeEventListener('dblclick', preventDoubleClick);
    }
  }, []);

  return ref;
}

export default usePreventDoubleClick
