import React from "react";
import { ContentContainer, Text, Input, Button } from "src/components/ui";
import { msg } from "./messages";
import Image from "next/image";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { CustomForm } from "./partials/CustomForm";

const formUrl =
  "https://gmail.us1.list-manage.com/subscribe/post?u=082a6d69b40000ab3aa18ac47&amp;id=823276af62";

const MemoizedUi: JSX.Element = (
  <>
    <ContentContainer className="home-newsletter">
      <ContentContainer className="home-newsletter__image">
        <Image
          src="/home/newsletter/image.jpg"
          alt="img"
          layout="fill"
          objectFit="cover"
          loading="eager"
          priority
        />
      </ContentContainer>

      <ContentContainer className="home-newsletter__modal-container">
        <ContentContainer
          justifyContent="center"
          alignItems="center"
          padding="2rem"
          width="100%"
          height="20rem"
          borderRadius="5px"
          className="background-color-main-color"
        >
          <Text className="home-newsletter__text" as="p">
            {msg}
          </Text>
        </ContentContainer>
        <ContentContainer className="home-newsletter__input-container">
          <MailchimpSubscribe
            url={formUrl}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  </>
);

const Newsletter = () => {
  return MemoizedUi;
};

export default Newsletter;
