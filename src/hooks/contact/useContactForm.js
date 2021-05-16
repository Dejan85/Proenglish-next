const useContactForm = () => {
  const contactForm = (data) => {
    return fetch("/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.status;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    contactForm,
  };
};

export default useContactForm;
