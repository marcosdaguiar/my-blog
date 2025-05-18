import { useState } from "react";

export const useForms = (initialState = {}) => {

  const [form, setForm] = useState(initialState);

  const formDataSerialized = (form) => {
    const formData = new FormData(form);
    const completeObject = {};

    for (let [name, value] of formData) {
        completeObject[name] = value;
    }
    return completeObject;
  }

  const sent = (e) => {
    e.preventDefault();
    let course = formDataSerialized(e.target);
    setForm(course);
    document.querySelector(".code").classList.add("sent");
  }

  const modified = ({target}) => {
    const {name, value} = target;
    setForm({
      ...form,
      [name]: value
    });
  }

  return {
    form,
    sent,
    modified
  };
}