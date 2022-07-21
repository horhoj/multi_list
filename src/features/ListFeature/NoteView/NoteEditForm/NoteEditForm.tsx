import { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { NoteEditFormValues } from '../types';
import styles from './NoteEditForm.module.scss';

interface NoteEditFormProps {
  initialValues: NoteEditFormValues;
  onSubmit: (values: NoteEditFormValues) => void;
  onCancel?: () => void;
  placeholder: string;
  autoFocus: boolean;
}

const validationSchema = yup.object({
  title: yup.string().required(),
});

export const NoteEditForm: FC<NoteEditFormProps> = ({
  initialValues,
  autoFocus,
  onCancel,
  onSubmit,
  placeholder,
}) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      noValidate
      autoComplete={'off'}
      className={styles.wrap}
    >
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        {...formik.getFieldProps('title')}
        autoFocus={autoFocus}
        onBlur={() => onCancel && onCancel()}
      />
    </form>
  );
};
