import type { ListItems, GetListItemParams, UserItems, PostsItem } from '@/store/types';
import axios, { type AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URI as string,
});

const fetchUserItem = (userId: string): Promise<AxiosResponse<UserItems>> => {
    return instance.get(`user/${userId}.json`);
};