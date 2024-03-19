//Making CRUD API Requests
const apiRequest = async (url = '', optionsObject = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObject);
    if (!response.ok) throw Error('Please reload the app. Something went wrong.');
  } catch (err) {
    errMsg = err.message;
    return errMsg;
  }
}
export default apiRequest;