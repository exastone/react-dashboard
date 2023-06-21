// gpioAPI.js

export const getGPIOState = async (pinid, baseURL) => {

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  try {
    const response = await fetch(`${baseURL}/api/GPIO/status/${pinid}`, requestOptions)
    const content = await response.json();
    return content.active;

  } catch (e) {
    console.log(e);
    return null;
  }
};

export const setGPIOState = async (event, pinid, baseURL) => {

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  try {
    let state = (event.target.checked === true ? "1" : "0");
    const response = await fetch(`${baseURL}/api/GPIO/interact/${pinid}/${state}`, requestOptions);
    return await response.json();
  } catch (e) {
    console.log(e);
    return null;
  }

};
