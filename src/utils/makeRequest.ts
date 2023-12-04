import axios from "axios";

const makeRequest = async (url: string, method: string, data: any) => {
    try {
        const response = await axios({
            url,
            method,
            data,
        });
        return response.data;
        
    } catch (error) {
        throw error;
    }
};


export default makeRequest;