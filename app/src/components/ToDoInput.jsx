import { Form, Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import './ToDoInput.css'

const ToDoSchema = Yup.object({
    ToDo: Yup.string()
        .min(5, 'Must be longer then 5 caracters')
        .max(20, 'Must be shorter then 20 caracters')
        .required('Required'),
});

export default function ToDoInput({onAdd}) {
    return (
        <Formik
            initialValues = {{ToDo: ''}}
            validationSchema = {ToDoSchema}
            onSubmit = {(values, {resetForm}) => {
                onAdd(values)
                resetForm();
            }}>
                <Form className='FormikBlock'>
                    <p className='ToDoLable'>Add Task</p>
                    <div  className='ToDoForm'>
                        <Field name='ToDo' placeholder='Task' className='ToDoInput'/>
                        <button type='submit'>Add task</button>                        
                    </div>
                    <ErrorMessage name='ToDo' component='div' className='ToDoError'/>
                </Form>
        </Formik>
    )
}