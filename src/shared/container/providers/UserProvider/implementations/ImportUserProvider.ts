import { Injectable, InternalServerErrorException, SerializeOptions } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import Bottleneck from "bottleneck";
import throttledQueue from 'throttled-queue';

@Injectable()
class ImportUserProvider {
    constructor(
        private http: HttpService
    ) { }


    public async getUsers(page: number): Promise<string> {

        let data = ''
        const url = `https://linkapi-desafio-tech.gateway.linkapi.solutions/v1/users`;
        let loop = false
        do {

            await this.http.get(url,
                {
                    auth: {
                        username: '17b271f2-2c76-4240-a0d7-46f57e919ca3',
                        password: '741d5db9-c596-41b4-8785-1d50367224c8',
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: {
                        limit: '10',
                        page: page,
                    }
                }
            )
                .toPromise()
                .then((res) => {
                    data = res.data
                    loop = false
                })
                .catch(async (e) => {
                    if (e.response.status) {
                        loop = true
                        console.log('esperando ', e.response.data.retryAfter, 'para repetir o teste')

                        const timers = (seconds) => {
                            let time = seconds * 1000
                            return new Promise(res => setTimeout(res, time))
                        }
                        await timers(e.response.data.retryAfter)
                    } else {
                        const err = JSON.parse(JSON.stringify(e))
                        throw new InternalServerErrorException(err.message);
                    }
                })
        } while (loop);

        return data
    }
    public async getUsersContacts(id: number): Promise<string> {

        let data = ''
        const url = `https://linkapi-desafio-tech.gateway.linkapi.solutions/v1/users/${id}/contacts`;

        let loop = false
        do {
            await this.http.get(url,
                {
                    auth: {
                        username: '17b271f2-2c76-4240-a0d7-46f57e919ca3',
                        password: '741d5db9-c596-41b4-8785-1d50367224c8',
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }

                }
            )
                .toPromise()
                .then((res) => {
                    data = res.data
                    loop = false
                })
                .catch(async (e) => {
                    if (e.response.status) {
                        loop = true
                        console.log('esperando ', e.response.data.retryAfter, 'para repetir o teste')

                        const timers = (seconds) => {
                            let time = seconds * 1000
                            return new Promise(res => setTimeout(res, time))
                        }
                        await timers(e.response.data.retryAfter)
                    } else {
                        const err = JSON.parse(JSON.stringify(e))
                        throw new InternalServerErrorException(err.message);
                    }
                })
        } while (loop);

        return data
    }

    public async getUserAddress(id: number): Promise<string> {


        let data = ''
        const url = `https://linkapi-desafio-tech.gateway.linkapi.solutions/v1/users/${id}/address`;

        let loop = false
        do {
            await this.http.get(url,
                {
                    auth: {
                        username: '17b271f2-2c76-4240-a0d7-46f57e919ca3',
                        password: '741d5db9-c596-41b4-8785-1d50367224c8',
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
                .toPromise()
                .then((res) => {
                    data = res.data
                    loop = false
                })
                .catch(async (e) => {
                    if (e.response.status) {
                        loop = true
                        console.log('esperando ', e.response.data.retryAfter, 'para repetir o teste')

                        const timers = (seconds) => {
                            let time = seconds * 1000
                            return new Promise(res => setTimeout(res, time))
                        }
                        await timers(e.response.data.retryAfter)
                    } else {
                        const err = JSON.parse(JSON.stringify(e))
                        throw new InternalServerErrorException(err.message);
                    }
                })

        } while (loop);
        return data


    }
}

export { ImportUserProvider }