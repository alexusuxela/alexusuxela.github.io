onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
    
    // Показать сообщение с днём рождения через 4 секунды
    setTimeout(() => {
      const birthdayMessage = document.querySelector('.birthday-message');
      birthdayMessage.style.display = 'block'; // Показываем сообщение
      birthdayMessage.style.opacity = '1'; // Делаем его видимым
    }, 4000); // Задержка перед появлением сообщения
  }, 1000);
};