import { ILoginErrors, ILoginProps, IRegisterProps,IRegisterErrors } from "@/interfaces";

export const validateFormLogin=(values:ILoginProps)=>{
    const errors:ILoginErrors={}
    if (!values.email) {
        errors.email = 'El correo es requerido';
        } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = 'El correo no es valido';
        }
    if (!values.password) {
        errors.password = 'La contraseña es requerida';
    } else if (values.password.length < 8) {
        errors.password = 'La contraseña debe tener al menos 8 caracteres';
    } else if (values.password.length > 20) {
        errors.password = 'La contraseña no puede exceder los 20 caracteres';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(values.password)) {
        errors.password = 'Debe incluir mayúsculas, minúsculas y números';
    }
        return errors
}

export const validateFormRegister = (values: IRegisterProps) => {
    const errors: IRegisterErrors = {};

    
    if (!values.email) {
        errors.email = 'El correo es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'El correo no es válido';
    }

    
    if (!values.password) {
        errors.password = 'La contraseña es requerida';
    } else if (values.password.length < 8) {
        errors.password = 'Mínimo 8 caracteres';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(values.password)) {
        errors.password = 'Debe incluir mayúsculas, minúsculas y números';
    }

    
    if (!values.name) {
        errors.name = 'El nombre es requerido';
    } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(values.name)) {
        errors.name = 'Nombre inválido (mínimo 3 letras)';
    }

    
    if (!values.address) {
        errors.address = 'La dirección es requerida';
    } else if (values.address.length < 5) {
        errors.address = 'Dirección demasiado corta';
    }

    
    if (!values.phone) {
        errors.phone = 'El teléfono es requerido';
    } else if (!/^\d{7,15}$/.test(values.phone)) {
        errors.phone = 'El teléfono debe tener entre 7 y 15 números';
    }

    return errors;
};