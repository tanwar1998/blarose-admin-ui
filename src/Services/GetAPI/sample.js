import axios from 'axios';
import { axiosConfigReturn } from '../../Services/basicApi';
import { updateStore, updateLoader } from '../../Redux/Store/cacheAction';
import { handelErrorResponse } from '../helper';

const getUserProfileData = (data, update = false) => {
    return function (dispatch) {
        if (!data.cacheData.data.userProfileData.isAlreadyCalled || update) {
            dispatch(updateLoader(true));
            const config = axiosConfigReturn('/api/user/profile', 'get', (null ||'ANAUTHORISED'));
            axios(config).then((response) => {
                dispatch(updateLoader(false));
                if (response?.data?.status) {
                    const storeData = {
                        key: 'userProfileData',
                        value: {
                            data: response.data.data,
                            isAlreadyCalled: true
                        }
                    }
                    dispatch(updateStore(storeData));
                }
            }, (err) => {
                handelErrorResponse(err, dispatch)
            });
        };
    }
};

export default getUserProfileData;