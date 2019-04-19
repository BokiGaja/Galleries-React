class HandleAuthData {
  saveAuthData(data) {
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('userId', data.user.id);
    localStorage.setItem('userName', data.user.first_name);
  }

  removeAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
  }
}

export const handleAuthData = new HandleAuthData();