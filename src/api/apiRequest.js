//Making CRUD API Requests
const apiRequest = async (url = '', optionsObject = null, errMsg = null) => {
  let result = {
    response: null,
    errMsg: false
  };
  try {
    const response = await fetch(url, optionsObject);
    // console.log(response.body);
    const resJSON = await response.json();
    result.response = resJSON;
    if (!response.ok) throw Error(resJSON.message);
  } catch (err) {
    result.errMsg = err.message;
  }
  return result;
}
export default apiRequest;