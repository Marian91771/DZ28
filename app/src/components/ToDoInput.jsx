import { Form, Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import style from './ToDoInput.module.css';

const ToDoSchema = Yup.object({
    ToDo: Yup.string()
        .min(5, 'Must be longer then 5 caracters')
        .max(20, 'Must be shorter then 20 caracters')
        .required('Required'),
});

export default function ToDoInput({onAdd, editValue }) {
    return (
        <Formik
            initialValues = {{ToDo: editValue }}
            enableReinitialize={true}
            validationSchema = {ToDoSchema}
            onSubmit = {(values, {resetForm}) => {
                onAdd(values)
                resetForm();
            }}>
                <Form className={style.FormikBlock}>
                    <p className={style.ToDoLable}>{editValue ? 'Edit task' : 'Add task'}</p>
                    <div  className={style.ToDoForm}>
                        <Field name='ToDo' placeholder='Task' className={style.ToDoInput}/>
                        <button type='submit'>{editValue ? 'Edit' : 'Add'}</button>                        
                    </div>
                    <ErrorMessage name='ToDo' component='div' className={style.ToDoError}/>
                </Form>
        </Formik>
    )
}