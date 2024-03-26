import css from "./ContactForm.module.css";
import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { GoDotFill } from "react-icons/go";
import { FaExclamation } from "react-icons/fa6";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, <GoDotFill className={css.error} />)
    .max(50, <GoDotFill className={css.error} />)
    .required(<FaExclamation className={css.attention} />),
  number: Yup.string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(3, "too short")
    .max(10, "too long")
    .required(<FaExclamation className={css.attention} />),
});

export const ContactForm = ({ onAdd }) => {
  const lableName = useId();
  const lableNumber = useId();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={SignupSchema}
      onSubmit={(value, actions) => {
        onAdd({ id: nanoid(), ...value });
        actions.resetForm();
      }}
    >
      <Form className={css.formicForm}>
        <label htmlFor={lableName} className={css.labelForm}>
          Name:
        </label>
        <div className={css.errorMessageBox}>
          <Field
            type="text"
            id={lableName}
            name="name"
            className={css.inputForm}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </div>

        <label htmlFor={lableNumber} className={css.labelForm}>
          Number:
        </label>
        <div className={css.errorMessageBox}>
          <Field
            type="text"
            id={lableNumber}
            name="number"
            className={css.inputForm}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </div>

        <button type="submit" className={css.btnForm}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
