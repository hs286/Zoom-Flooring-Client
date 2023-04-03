import axios from "axios";
import toast from "react-hot-toast";
import * as types from "../actionType";

export const gettingServices = (service) => ({
  type: types.GET_SERVICES,
  payload: service,
});
export const getServices = (id) => async (dispatch) => {
  try {
    const services = await axios.get(`http://52.200.45.31/service/?category=${id}`);
    dispatch(gettingServices(services.data));
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data.message);
  }
};
export const gettingServiceById = (service) => ({
  type: types.GET_SERVICE_BY_ID,
  payload:service
});

export const getServiceById = (id) => async (dispatch) => { 
  try {
    const service = await axios.get(`http://52.200.45.31/service/${id}`);
    dispatch(gettingServiceById(service));
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data.message);
  }
};

export const gettingHomeData = (home) => ({
  type: types.GET_HOME_DATA,
  payload: home,
});
export const getHomeData = (id) => async (dispatch) => {
  try {
    const home = await axios.get(`http://52.200.45.31/service/home`);
    dispatch(gettingHomeData(home?.data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error?.response?.data?.message);
  }
};

export const sendMail = (formData) => async () => { 
  try {
    await axios.post(`http://52.200.45.31/mail`,  {formData} );
    toast.success("Your request has been sent successfully")
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data.message);
  }
};



