import React, { useState } from "react";
import { Button } from "src/components/ui";

export const CustomForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState("");

  const alredySubscribed = "is already subscribed to list";
  const toManyRequest = "has too many recent signup requests";
  const successMessage = "Thank you for subscribing!";

  const checkStatusMsg = (message) => {
    if (message && message.indexOf(alredySubscribed) !== -1) {
      return "Uneti email vec postoji.";
    }

    if (message && message.indexOf(toManyRequest) !== -1) {
      return "Uneti email vec postoji.";
    }

    if (message && message.indexOf(successMessage) !== -1) {
      return "Uspesno ste se pretplatili na newsleter";
    }
  };

  let email;
  const submit = () => {
    if (email && email.value.indexOf("@") > -1) {
      onValidated({
        EMAIL: email.value,
      });
    } else {
      setError("Niste uneli validan email");
    }
  };

  return (
    <>
      <div className="home-newsletter__form">
        <input
          className="home-newsletter__input"
          ref={(node) => (email = node)}
          type="text"
          placeholder="Uzmite svoju dozu znanja..."
        />

        <Button onClick={submit} className="home-newsletter__button">
          Prijavi se
        </Button>
      </div>
      {status === "success" && (
        <div className="home-newsletter__success_msg">
          {status && checkStatusMsg(message)}
        </div>
      )}

      {(status === "error" || error) && (
        <div className="home-newsletter__error_msg">
          {error || checkStatusMsg(message)}
        </div>
      )}
    </>
  );
};
