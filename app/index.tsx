

import SplashScreen from '@/components/splashScreen';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';



export default function AuthRoutesLayout() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  const router = useRouter()


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplashScreen(false);
      router.push('/(tabs)/home')
    }, 9000);

    return () => clearTimeout(timer);
  }, []);



  if (isShowSplashScreen) {
    return <SplashScreen />;
  }


}