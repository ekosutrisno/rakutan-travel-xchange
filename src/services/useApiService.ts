import { defineStore } from 'pinia'
import axios from 'axios';
import { DataResponse, ErrorResponse, Result } from '../@types/model.inteface';

interface ApiServiceState {
    dataResponse: DataResponse | null;
    errorResponse: ErrorResponse | null;
}

export const useApiService = defineStore('useApiService', {
    state: (): ApiServiceState => ({
        dataResponse: null,
        errorResponse: null
    }),

    actions: {

        /**
         * @param  {string} cityCode
         * This method handle get data
         */
        getData(cityCode: string) {
            axios.get(`api/job01/search/${cityCode}`)
                .then(response => {
                    if (response.data.status == 400)
                        this.errorResponse = response.data as ErrorResponse;
                    else
                        this.dataResponse = response.data as DataResponse;
                })
                .catch(error => console.log(error));
        }

    },

    getters: {
        /**
         * @returns Result
         * This getter will return result array if dataResponse not null
         */
        getResult(): Result[] {
            return this.dataResponse
                ? this.dataResponse.outlets.availability.results
                : [];
        }

    }

})