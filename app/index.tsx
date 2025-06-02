

import SplashScreen from '@/components/splashScreen';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';



export default function AuthRoutesLayout() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  const router = useRouter()


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplashScreen(false);
      router.push('/(tabs)/home')
    }, 10000);

    return () => clearTimeout(timer);
  }, []);



  if (isShowSplashScreen) {
    return <SplashScreen />;
  }


}