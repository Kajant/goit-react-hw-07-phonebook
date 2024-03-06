import axios from 'axios';

axios.defaults.baseURL = 'https://65e72ac453d564627a8e25a3.mockapi.io/';

export const getContactsApi = async () => {
  const result = await axios.get('/contacts');
  return result.data;
};

export const addContactsApi = async item => {
  const result = await axios.post('/contacts', item);
  return result.data;
};

export const deleteContactsApi = async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
};
