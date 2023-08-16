import React, { useEffect, useState } from 'react';

const usePromise = (promiseCreator, depths) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const process = async() => {
      setLoading(true);
      try{
        const resolved = await promiseCreator();
        setResolved(resolved);
      }catch(e){
        setError(e);
      }
      setLoading(false);
    }
    process();
  },depths);

  return [loading, resolved, error];
};

export default usePromise;