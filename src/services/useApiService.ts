import { defineStore } from 'pinia'
import { City, DataResponse, ErrorResponse, Result } from '../@types/model.inteface';
import exampleData from '../assets/example.json';

interface ApiServiceState {
    dataResponse: DataResponse | null;
    errorResponse: ErrorResponse | null;
    autoSuggest: City[];
    loading: boolean;
}

export const useApiService = defineStore('useApiService', {
    state: (): ApiServiceState => ({
        dataResponse: null,
        // dataResponse: exampleData as DataResponse,
        errorResponse: null,
        autoSuggest: [],
        loading: false
    }),

    actions: {

        /**
         * @param  {string} cityCode
         * This method handle get data
         */
        getProperty(cityCode: string) {
            // Init loading state
            this.loading = true;

            fetch(`api/job01/search/${cityCode}`)
                .then(res => res.json())
                .then(response => {
                    if (response.status == 400 || response.message) {
                        this.errorResponse = response as ErrorResponse;
                        this.dataResponse = null; //Reset value
                        this.loading = false;
                    } else {
                        this.dataResponse = response as DataResponse;
                        this.errorResponse = null; //Reset value
                        this.loading = false;
                    }
                }).catch(() => {
                    this.loading = false;
                })
                .finally(() =>
                    this.loading = false
                );
        },

        getAutoSuggest() {
            fetch(`api/job01/autosuggest`)
                .then(res => res.json())
                .then(response => {
                    this.autoSuggest = []; // Reset value
                    this.autoSuggest = response as City[];
                })
                .catch(err => console.log(err))
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