const fetchUserData = userId => {
    return fetch(`https://api.github.com/users/${userId}`)
        .then(response => response.json());
};

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10002';

const setDefaultAvatar = () => {
    if (userAvatarElem.src !== defaultAvatar) {
        userAvatarElem.src = defaultAvatar;
    }
};

setDefaultAvatar();

userAvatarElem.addEventListener('error', setDefaultAvatar);

const renderUser = userData => {
    const { avatar_url, name, location } = userData;

    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;
    userLocationElem.textContent = location ? `from ${location}` : '';
};

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
    const userId = userNameInputElem.value;
    fetchUserData(userId)
        .then(userData => renderUser(userData));
};

showUserBtnElem.addEventListener('click', onSearchUser);