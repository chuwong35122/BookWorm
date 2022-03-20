import {getAuth, onAuthStateChanged, User} from 'firebase/auth';
import {useState, useEffect} from 'react';

export function useFirebaseAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unlisten = onAuthStateChanged(getAuth(), authUser => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unlisten();
  }, []);

  //TODO: Remove this later. It's for testing & development.
  useEffect(() => {
    console.log({user});
  }, [user]);

  return {user};
}
