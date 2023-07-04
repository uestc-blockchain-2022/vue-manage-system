import request from '../utils/request';

export const fetchData = (url : string) => {
    return request({
        url: url,
        method: 'get'
    });
};
