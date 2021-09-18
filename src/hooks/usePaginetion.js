import { useMemo } from 'react';

export const usePaginetion = totalPages => {
  const allPagesArray = useMemo(() => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
    }
    return result;
  }, [totalPages]);

  return allPagesArray;
};
