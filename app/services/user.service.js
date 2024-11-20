import apiClient from './api.service';

class UserService {
    // Đăng ký tài khoản
    register(data) {
        return apiClient.post('/users/register', data);
    }

    // Đăng nhập tài khoản
    login(data) {
        return apiClient.post('/users/login', data);
    }
}

export default new UserService();
