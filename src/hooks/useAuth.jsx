const useAuth = () => {
    const token = window.localStorage.getItem("token");
    return token ? true : false;
}

export { useAuth }