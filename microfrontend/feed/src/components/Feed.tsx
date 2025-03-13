import React from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import useGlobalStore from "store/store"
import ProtectedRoute from "./ProtectedRoute.tsx";
import Main from "./Main.tsx";
import api from "../utils/api.ts";
import PopupWithForm from "./PopupWithForm.tsx";
import ImagePopup from "./ImagePopup.tsx";

function Feed() {
    const history = useHistory();

    const [selectedCard, setSelectedCard] = React.useState(null);

    //@ts-ignore
    const {setCurrentUser, currentUser, cards, setCards} = useGlobalStore();

    React.useEffect(() => {
        api
            .getAppInfo()
            .then(([cardData, userData]) => {
                setCurrentUser(userData);
                setCards(cardData);
            })
            .catch((err) => console.log(err));
    }, []);


    function closeAllPopups() {
        setSelectedCard(null);
    }

    function handleCardClick(card: any) {
        setSelectedCard(card);
    }

    function handleCardLike(card: any) {
        // @ts-ignore
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        api
            .changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards(cards.map((c: { _id: any; }) => (c._id === card._id ? newCard : c)));
            })
            .catch((err) => console.log(err));
    }

    function handleCardDelete(card: any) {
        api
            .removeCard(card._id)
            .then(() => {
                // @ts-ignore
                setCards((cards.filter((c) => c._id !== card._id)))
            })
            .catch((err) => console.log(err));
    }

    return (
        <React.Fragment>
            <Main
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
            />

            {/*// @ts-ignore*/}
            <PopupWithForm title="Вы уверены?" name="remove-card" buttonText="Да" />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </React.Fragment>
    )
}

export default Feed;