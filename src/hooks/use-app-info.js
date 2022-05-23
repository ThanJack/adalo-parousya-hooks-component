import { useMemo, useEffect, useState, useRef, useCallback } from 'react'
import { AppState } from 'react-native'

export const useAppInfo = () => {

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const profile = useMemo(() => ({ useName: 'Than.Jack' }), [])

  const onChange = useCallback(() => nextAppState => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log("AppState", appState.current);
  }, [])

  useEffect(() => {
    AppState.addEventListener("change", onChange);
    return () => {
      AppState.removeEventListener('change', onChange)
    };
  }, []);

  return { profile, appStateVisible }
}