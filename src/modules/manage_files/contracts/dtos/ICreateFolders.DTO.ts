import { ApiProperty } from "@nestjs/swagger";


export class ICreateFolderDTO {
    @ApiProperty({ required: true })
    //@IsNotEmpty({ message: 'A campanha é obrigatório.' })
    name?: string
}