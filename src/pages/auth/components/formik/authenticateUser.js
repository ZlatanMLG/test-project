const authenticateUser = (email, password) => {
    // Список правильних пар адрес та паролів
    const correctCredentials = [
      { email: 'user1@example.com', password: '1qW@' },
      { email: 'user2@example.com', password: '2qW@' },
      { email: 'user3@example.com', password: '3qW@' },
    ];

    // Перевірка чи надані користувачем пошта та пароль співпадають з правильними
    return correctCredentials.some(
      (credentials) => credentials.email === email && credentials.password === password
    );
  };

export default  authenticateUser