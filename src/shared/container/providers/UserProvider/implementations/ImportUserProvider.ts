import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'

@Injectable()
class ImportUserProvider {
    constructor(
        private http: HttpService,
    ) { }

    public async getUsers(page: number): Promise<string> {

        let data = ''
        const url = `${process.env.LINKAPI_URL}/users`;
        let loop = false

        do {

            await this.http.get(url,
                {
                    auth: {
                        username: process.env.LINKAPI_USER,
                        password: process.env.LINKAPI_PASSWORD,
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
        const url = `${process.env.LINKAPI_URL}/users/${id}/contacts`;

        let loop = false
        do {
            await this.http.get(url,
                {
                    auth: {
                        username: process.env.LINKAPI_USER,
                        password: process.env.LINKAPI_PASSWORD,
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
        const url = `${process.env.LINKAPI_URL}/users/${id}/address`;

        let loop = false
        do {
            await this.http.get(url,
                {
                    auth: {
                        username: process.env.LINKAPI_USER,
                        password: process.env.LINKAPI_PASSWORD,
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