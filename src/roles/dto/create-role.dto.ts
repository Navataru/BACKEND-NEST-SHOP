import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'админ'})
    readonly value: string;
    @ApiProperty({example: 'Администратор', description: 'администратор'})
    readonly description: string;
}
