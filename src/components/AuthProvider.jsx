import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import * as userService from "~/services/userService";
import { useLocation, useNavigate } from "react-router-dom";
import routes from "~/config/routes";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [token, setToken] = useState("");
    const [currentUser, setCurrentUser] = useState({});
    const [role, setRole] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const login = (data) => {
        setIsLoading(true);
        userService
            .login({ data })
            .then((res) => {
                if (res.data) {
                    window.localStorage.setItem("token", res.data.token);
                    setCurrentUser(res.data);
                    setRole(res.data.role);
                    setToken(res.data.token);
                    setIsLoading(false);
                    navigate(routes.home);
                }
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
                err.response.status === 404 ? alert(err.response.data.error) : alert(err.response.data.error);
            });
    };

    const register = ({ data }) => {
        userService
            .Register({ data })
            .then((res) => {
                if (res.data.data) {
                    login(data);
                } else if (res.response.data.error.keyPattern.email) {
                    alert("Email đã tồn tại");
                }
            })
            .catch((err) => console.log(err));
    };

    const editProfile = async (data) => {
        if (data.password !== data.rePassword) alert("Mật khẩu không trùng khớp");
        const formData = new FormData();
        formData.append("password", data.password);
        formData.append("fullName", data.fullName);
        formData.append("email", data.email);
        {
            data.imageUrl && formData.append("imageUrl", data.imageUrl);
        }

        await userService
            .editUser({ id: data.id, data: formData })
            .then((res) => {
                if (res.data) {
                    alert("Thay đổi thành công");
                    setCurrentUser(res.data);
                    navigate(-1);
                } else if (res.response.data.error.keyPattern.email) {
                    alert("Email đã tồn tại");
                }
            })
            .catch((err) => console.log(err));
    };

    const logOut = () => {
        window.localStorage.removeItem("token");
        setCurrentUser({});
        setToken("");
        setRole();
        navigate(routes.home);
    };

    const isLogged = async () => {
        try {
            setIsLoading(true);
            const Token = await window.localStorage.getItem("token");
            if (Token) {
                const res = await userService.getCurrentUser({});
                if (res.data) {
                    setToken(Token);
                    setCurrentUser(res.data);
                    setRole(res.data.role);
                    setIsLoading(false);
                }
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            await window.localStorage.removeItem("token");
            setToken("");
            setCurrentUser({});
            setRole();
            setIsLoading(false);
        }
    };

    useEffect(() => {
        isLogged();
    }, []);

    useEffect(() => {
        if ((role === 0 || role === 3) && location.pathname === routes.home) {
            navigate(routes.dashboard);
        }
    }, [location, navigate, role]);

    return (
        <AuthContext.Provider
            value={{
                token,
                currentUser,
                role,
                isLoading,
                login,
                logOut,
                register,
                editProfile,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
