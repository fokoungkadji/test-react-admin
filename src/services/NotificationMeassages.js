import { toast } from 'react-toastify';
import './notificationMessages.scss'

export function showErrorNotification(message) {
    toast.error(message, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "error-message"
    });
}
export function showSuccessNotification(message) {
    toast.success(message, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "success-message"
    });
}