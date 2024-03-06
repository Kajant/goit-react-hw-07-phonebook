import axios from 'axios';

axios.defaults.baseURL = 'https://65e72ac453d564627a8e25a3.mockapi.io/';

export const getContactsApi = async () => {
  const response = await axios('/contacts');
  return response.data;
};

export const addContactsApi = async item => {
  const response = await axios.post('/contacts', item);
  return response.data;
};

export const deleteContactsApi = async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
};