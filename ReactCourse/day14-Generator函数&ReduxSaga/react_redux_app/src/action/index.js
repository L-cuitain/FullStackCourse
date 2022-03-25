import { GET_SECRET , SAVE_SECRET } from '../contants';

export const getSecret = () => {
    return {
        type: GET_SECRET
    }
}

export const saveSecret = (secret) => {
    return {
        type: SAVE_SECRET,
        secret: secret
    }
}