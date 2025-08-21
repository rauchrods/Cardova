import { FormData } from "../components/BusinessCardCreator";


export const hasRequiredFormFields = (formData: FormData): boolean => {
  return (
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.jobTitle.trim() !== ""
  );
};


