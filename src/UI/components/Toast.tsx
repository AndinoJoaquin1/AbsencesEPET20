import { Toast } from 'native-base';

const addToast = (title) => {
            Toast.show({
             title: title,
           });
}

export default addToast;