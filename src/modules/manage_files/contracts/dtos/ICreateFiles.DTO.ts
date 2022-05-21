import { ApiProperty } from "@nestjs/swagger";

export class ICreateFilesDTO {
    @ApiProperty({ required: true })
    //@IsNotEmpty({ message: 'A campanha é obrigatório.' })
    name: string

    @ApiProperty({ required: true })
    //@IsNotEmpty({ message: 'A campanha é obrigatório.' })
    folder_id: string
}