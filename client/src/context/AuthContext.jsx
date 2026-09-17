import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getCurrentUser,
  logoutUser,
} from "../API/authService.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore logged-in user when the app starts
  useEffect(() => {
    const loadUser = async () => {
      const storedToken = localStorage.getItem("pinaki_token");

      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await getCurrentUser();

        if (response.success) {
          setUser(response.data.user);
        } else {
          localStorage.removeItem("pinaki_token");
          setUser(null);
        }
      } catch (error) {
        console.error("Session restore error:", error);

        localStorage.removeItem("pinaki_token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // Called after successful login
  const login = (token, userData) => {
    localStorage.setItem("pinaki_token", token);
    setUser(userData);
  };

  // Logout from backend and clear local session
  const logout = async () => {
    try {
      const token = localStorage.getItem("pinaki_token");

      if (token) {
        await logoutUser();
      }
    } catch (error) {
      console.error("Logout API error:", error);
    } finally {
      localStorage.removeItem("pinaki_token");
      setUser(null);
    }
  };

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};