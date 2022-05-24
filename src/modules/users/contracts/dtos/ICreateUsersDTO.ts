import { ApiProperty } from "@nestjs/swagger";

export class ICreateUsersDTO {
    @ApiProperty({ required: true })
    //@IsNotEmpty({ message: 'A campanha é obrigatório.' })
    fullName: string

    @ApiProperty({ required: true })
    //@IsNotEmpty({ message: 'A campanha é obrigatório.' })
    email: string

    @ApiProperty({ required: true })
    //@IsNotEmpty({ message: 'A campanha é obrigatório.' })
    addressNumber: number

    @ApiProperty({ required: true })
    //@IsNotEmpty({ message: 'A campanha é obrigatório.' })
    phoneNumber: string
}