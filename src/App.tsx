import React, { useEffect } from 'react';
import "./i18n";
import { supabase } from "./supabase";
import { useSetAtom } from "jotai";
import { userAtom } from './store/auth';
import { AppRoutes } from './routes';


export const App: React.FC = () => {

  const setUser = useSetAtom(userAtom);
 

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <>
    <AppRoutes />
    </>
  );
};

export default App;
