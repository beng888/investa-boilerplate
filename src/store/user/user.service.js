import api from '@config/api';

//* Login user
const login = async (id) => {
  const response = await api.get(`/user/${id}`);

  return response.data;
};

const userService = { login };

export default userService;
