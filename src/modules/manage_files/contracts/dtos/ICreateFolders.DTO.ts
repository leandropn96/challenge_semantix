import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from 'class-validator';

export class ICreateFolderDTO {
    @ApiProperty({ required: true })
    @IsNotEmpty({ message: 'O Nome da pasta é obrigatorio' })
    name: string
}