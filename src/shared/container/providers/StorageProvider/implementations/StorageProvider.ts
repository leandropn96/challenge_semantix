import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { IFolderModel } from '../models/IFolder';
import { IFileModel } from '../models/IFile';
const fs = require('fs');

@Injectable()
class StorageProvider {
    constructor(
        private http: HttpService
    ) { }

    public async getServer(): Promise<string> {

        let server = ''
        const url = `${process.env.GOFILE_URL}/getServer`;

        await this.http.get(url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
            .toPromise()
            .then((res) => {
                server = res.data.data.server
            })
            .catch((e) => {
                const err = JSON.parse(JSON.stringify(e))
                throw new InternalServerErrorException(err.message);
            })

        return server
    }

    public async createFulder(folder_name: string): Promise<IFolderModel> {
        let folder: IFolderModel

        const url = `${process.env.GOFILE_URL}/createFolder`;
        await this.http.put(url, {
            folderName: folder_name,
            parentFolderId: "ffc58220-d175-496b-8b3f-e87e00538909",
            token: process.env.GOFILE_TOKEN
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .toPromise()
            .then((res) => {
                folder = res.data.data
            })
            .catch((e) => {
                const err = JSON.parse(JSON.stringify(e))
                throw new InternalServerErrorException(err.message);
            })

        return folder
    }

    public async createFile(file: any, server: string, folder_id: string, file_name: string): Promise<IFileModel> {

        let new_file: IFileModel
        var FormData = require('form-data');
        let data = new FormData();
        data.append('teste', file, file_name);
        data.append('token', process.env.GOFILE_TOKEN)
        data.append('folderId', folder_id)
        let url = `https://${server}.gofile.io/uploadFile`

        await this.http.post(url, data,
            {
                headers: {
                    ...data.getHeaders(),
                },
            })
            .toPromise()
            .then((res) => {
                new_file = res.data.data
            })
            .catch((e) => {
                console.log(e)
                const err = JSON.parse(JSON.stringify(e))
                throw new InternalServerErrorException(err.message);
            })

        return new_file

    }

    public async deleteFile(file_id: string): Promise<string> {
        let status = ''

        const url = `${process.env.GOFILE_URL}/deleteContent`;

        await this.http.delete(url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    contentsId: file_id,
                    token: process.env.GOFILE_TOKEN
                }
            })
            .toPromise()
            .then((res) => {
                res.data.data[`${file_id}`]
            })
            .catch((e) => {
                console.log(e)
                const err = JSON.parse(JSON.stringify(e))
                throw new InternalServerErrorException(err.message);
            })

        return status
    }
}

export { StorageProvider }