import React from "react";
import AdminRoutes from "./routes/AdminRoutes";
import { User } from "./types/login";
import PublicRoutes from "./routes/PublicRoutes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, storage } from "./firebase";
import { useDispatch } from "react-redux";
import { addProduct, setItemsFromStorage } from "./redux/slices/cartSlice";
import { RootState, store } from "./redux/store";
import { Cart } from "./types/cart";

function App() {
  const [isAdmin, setIsAdmin] = React.useState<boolean>(false);
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    try {
      let user: User = JSON.parse(localStorage.getItem("user") ?? "");
      if (user.role === "admin") {
        setIsAdmin(true);
      }
    } catch {}
    if (!user && !loading && !error) {
      localStorage.clear();
      setIsAdmin(false);
    }
  }, [user]);

  React.useLayoutEffect(() => {
    try {
      let cart: Cart = JSON.parse(localStorage.getItem("cart") ?? "");
      dispatch(setItemsFromStorage(cart));
    } catch (error) {}
  }, []);

  if (isAdmin && !loading) {
    return <AdminRoutes />;
  } else if (!isAdmin && !loading) {
    return <PublicRoutes />;
  } else {
    return <></>;
  }
}

export default App;
