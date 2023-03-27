import type {
    ListItems,
    GetListItemParams,
    UserItems,
    PostsItem,
} from '@/store/types';
import axios, { type AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URI as string,
});

const fetchListItem = ({
    pageName,
    pageNum,
}: GetListItemParams): Promise<AxiosResponse<ListItems[]>> => {
    return instance.get(`${pageName}/${pageNum}.json`);
};

const fetchUserItem = (userId: string): Promise<AxiosResponse<UserItems>> => {
    return instance.get(`user/${userId}.json`);
};

const fetchPostItem = (itemId: string): Promise<AxiosResponse<PostsItem>> => {
    return instance.get(`item/${itemId}.json`);
};

export { fetchListItem, fetchUserItem, fetchPostItem };
