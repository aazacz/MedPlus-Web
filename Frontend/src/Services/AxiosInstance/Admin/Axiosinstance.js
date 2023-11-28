import  axios  from "axios";
import Cookies from "js-cookie"



const baseURL = `http://localhost:6002/Admin`
const axiosInstance = axios.create()


axiosInstance.interceptors.request.use(function (config) {
    console.log("Interceptor request send");
 
        const role = "Admin";
        const token = Cookies.get(`${role}jwtCookie`);
        console.log("cookieValue is " + token);
        config.headers = { "authorization-key": `${token}` };

        config.baseURL = baseURL
   

    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });



// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log ("Interceptor Response send");

    console.log ( "response"    + response.data.message);
    
    if(response.data.message === "TimedOut"){
        
         Cookies.remove('AdminjwtCookie')
    }
    return response;

}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


  


export default axiosInstance