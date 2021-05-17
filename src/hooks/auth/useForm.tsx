import { useState } from "react";

// hooks
import useSign from "./useSign";
import useAuthenticate from "./useAuthenticate";
import useErrorHandler from "./useErrorHandle";
import useContactForm from "../contact/useContactForm";

const useForm = (handler) => {
  const { signup, signin } = useSign();
  const { contactForm } = useContactForm();
  const { authenticate } = useAuthenticate();
  const { errorHandle } = useErrorHandler();
  const [error, setError] = useState(undefined);
  const [redirect, setRedirect] = useState(false);
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    question: "",
    eventDescription: "",
    file: "",
    title: "",
    description: "",
    time: "",
    date: "",
    id: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const fileUpload = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.files[0],
    });
  };

  const onSubmit = (e, showModalHandler, testInfo) => {
    e && e.preventDefault();
    const { firstname, lastname, email, password, confirmPassword } =
      errorHandle(input);

    if (e.target.name === "signup") {
      if (!firstname && !lastname && !email && !password && !confirmPassword) {
        return signup(input)
          .then((res) => {
            if (res.error) {
              setError({ serverError: res.error });
            } else {
              setRedirect(true);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setError({ firstname, lastname, email, password, confirmPassword });
      }
    }

    if (e.target.name === "signin") {
      if (!email && !password) {
        return signin({ email: input.email, password: input.password })
          .then((res) => {
            if (res.error) {
              setError({ serverError: res.error });
            } else {
              authenticate(res);
              setRedirect(true);
            }
          })
          .catch((err) => {
            setError(err);
            console.log(err);
          });
      } else {
        setError({ email, password });
      }
    }

    if (e.target.name === "contact") {
      if (!firstname && !email) {
        return contactForm({
          name: input.firstname,
          email: input.email,
          title: input.title,
          question: input.question,
        })
          .then((res) => {
            handler(res);
          })
          .catch((err) => {
            setError(err);
            console.log(err);
          });
      } else {
        setError({ firstname, email });
      }
    }

    if (e.target.name === "initialTest") {
      if (!firstname && !email) {
        showModalHandler();
      } else {
        setError({ firstname, email });
      }
    }

    if (e.target.name === "testDone") {
      if (!firstname && !email) {
        return contactForm({
          name: input.firstname,
          email: input.email,
          title: `Rezultat testa za ${input.firstname}`,
          question: `${input.firstname} je zavrsio test, i njegov nivo znanje je ${testInfo}`,
        })
          .then((res) => {
            console.log("test", res);

            handler(res);
          })
          .catch((err) => {
            setError(err);
            console.log(err);
          });
      }
    }
  };

  return {
    input,
    onChange,
    onSubmit,
    error,
    redirect,
    fileUpload,
    setInput,
  };
};

export default useForm;
