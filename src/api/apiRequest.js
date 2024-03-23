//Making CRUD API Requests
const apiRequest = async (url = '', optionsObject = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObject);
    // console.log(response.body);
    const resJSON = await response.json();
    if (!response.ok) throw Error(resJSON.message);
  } catch (err) {
    errMsg = err.message;
    return errMsg;
  }
}
export default apiRequest;