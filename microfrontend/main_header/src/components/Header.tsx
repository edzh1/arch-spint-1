import React from "react";
import useGlobalStore from "store/store"
import Main from "./Main.tsx";
import api from "../utils/api.ts";
import EditProfilePopup from "./EditProfilePopup.tsx";
import EditAvatarPopup from "./EditAvatarPopup.tsx";
import AddPlacePopup from "./AddPlacePopup.tsx";

function Header() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
        React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
        React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);


    //@ts-ignore
    const { setCurrentUser, setCards, cards } = useGlobalStore();

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setIsAddPlacePopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
    }

    function handleUpdateUser(userUpdate: any) {
        api
            .setUserInfo(userUpdate)
            // @ts-ignore
            .then((newUserData) => {
                setCurrentUser(newUserData);
                closeAllPopups();
            })
            // @ts-ignore
            .catch((err) => console.log(err));
    }

    function handleAddPlaceSubmit(newCard: any) {
        api
            .addCard(newCard)
            .then((newCardFull) => {
                //@ts-ignore
                setCards([newCardFull, ...cards]);
                setIsAddPlacePopupOpen(false);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    }

    function handleUpdateAvatar(avatarUpdate: any) {
        api
            .setUserAvatar(avatarUpdate)
            // @ts-ignore
            .then((newUserData) => {
                setCurrentUser(newUserData);
                closeAllPopups();
            })
            // @ts-ignore
            .catch((err) => console.log(err));
    }

    return (
        <React.Fragment>
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
            />
            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onAddPlace={handleAddPlaceSubmit}
                onClose={closeAllPopups}
            />
            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onUpdateUser={handleUpdateUser}
                onClose={closeAllPopups}
            />
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onUpdateAvatar={handleUpdateAvatar}
                onClose={closeAllPopups}
            />
        </React.Fragment>
    )
}

export default Header;