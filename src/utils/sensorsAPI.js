// sensorsAPI.js

export const fetchTemperatureLog = async (baseURL) => {
    const requestOptions = {
        method: "GET",
        type: "application/octet-stream",
        "Content-Disposition": "attachment"
    };
    try {
        const response = await fetch(`${baseURL}/api/sensors/temp/history`, requestOptions);
        return await response.blob();
    } catch (e) {
        console.log(e)
        return null;
    }
}

export const fetchCurrentTemp = async (baseURL) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const response = await fetch(`${baseURL}/api/sensors/temp/live`, requestOptions);
        return response.json();
    } catch (e) {
        console.log(e);
        return null;
    }
}

export const fetchPowerLog = async (baseURL) => {
    const requestOptions = {
        method: "GET",
        type: "application/octet-stream",
        "Content-Disposition": "attachment"
    };
    try {
        const response = await fetch(`${baseURL}/api/sensors/history`, requestOptions);
        return await response.blob();
    } catch (e) {
        console.log(e)
        return null;
    }
}

export const fetchPowerNow = async (baseURL) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const response = await fetch(`${baseURL}/api/sensors/live`, requestOptions);
        return response.json();
    } catch (e) {
        console.log(e);
        return null;
    }
}