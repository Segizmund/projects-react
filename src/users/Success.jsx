import React from 'react';

const Success = (
    {   count,
        onClickReset
    }
) => {
    return (
        <div className="success-block">
            <img src="/success.svg" alt="Success" />
            <h3>Успешно!</h3>
            <p>Всем {count} пользователям отправлено приглашение.</p>
            <button onClick={onClickReset} className="send-invite-btn">Назад</button>
        </div>
    );
};

export default Success;