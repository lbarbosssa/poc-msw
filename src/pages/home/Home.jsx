import React, { useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";

const MAX_CARD_QUANT = 50;
const MIN_CARD_QUANT = 1;

const Home = () => {
    const [qntCards, setQntCards] = useState(MIN_CARD_QUANT);
    const [cards, setCards] = useState(null);

    const getCards = async () => {
        
        if (!validQnt()) return;

        await fetch(`/api/cards?qnt=${qntCards}`)
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(error => {
                console.error(error);
            });
    };

    const validQnt = () => {
        if(qntCards > MAX_CARD_QUANT) {
            toast.error(`Informe um número menor que ${MAX_CARD_QUANT}`);
            return false;
        } else if(qntCards < MIN_CARD_QUANT) {
            toast.error(`Informe um número maior que ${MIN_CARD_QUANT}`);
            return false;
        } else return true;
    };

    return (
        <div className="home-container">
            <div className="input-button-container">
                <Input
                    label="Quantidade de cards"
                    value={qntCards}
                    _function={(e) => setQntCards(e.target.value)}
                    min={MIN_CARD_QUANT}
                    max={MAX_CARD_QUANT}
                    _enterCallFunction={getCards}
                />
                <Button
                    label="Confirmar"
                    _function={getCards}
                    color="#4CAF50"
                />
            </div>
            {cards && cards.map(d => <Card key={d.id} name={d.name} description={d.description} avatar={d.avatar}/>)}
        </div>
    )
};

export default Home;