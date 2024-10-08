import React from 'react';

const Success = ({ count }) => {
    return (
        <div class="success-block">
            <img src="/success.svg" alt="Success" />
            <h3>Успешно!</h3>
            <p>Всем {count} пользователям отправлено приглашение.</p>
            <button className="send-invite-btn">Назад</button>
        </div>
    );
};

export default Success;