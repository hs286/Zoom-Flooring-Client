import axios from "axios";

export const addContactUs = (contactData) => async (dispatch) => {
  try {
     await axios.post(`http://52.200.45.31/contact`,contactData);
    
  } catch (error) {
    
    console.log(error.response.data.message);
  }
};
