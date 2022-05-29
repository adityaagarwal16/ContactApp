import axios from "./AxiosDeclarations";

export const getAllUsers = async () => {
    try {
        const users = await axios.get('users')
        return users.data;
    } catch (error) {
        return console.error(error);
    }
};


export const getDetailsOfUser = async payload => {
    try {
        const user = await axios.get('users/' + payload.id)
        console.log(user.data);
        return user.data;
    } catch (error) {
        return console.error(error);
    }
};
