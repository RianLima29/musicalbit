import React from "react";
import AdminRoutes from "./routes/AdminRoutes";
import { User } from "./types/login";
import PublicRoutes from "./routes/PublicRoutes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, storage } from "./firebase";

function App() {
  const [isAdmin, setIsAdmin] = React.useState<boolean>(false);
  const [user, loading, error] = useAuthState(auth);

  React.useEffect(() => {
    try {
      let user: User = JSON.parse(localStorage.getItem("user") ?? "");
      console.log(user);
      if (user.role === "admin") {
        setIsAdmin(true);
      }
    } catch {}
    if (!user && !loading && !error) {
      localStorage.clear();
      setIsAdmin(false);
    }
  }, [user]);

  return isAdmin && !loading && !error ? <AdminRoutes /> : <PublicRoutes />;
}

export default App;
