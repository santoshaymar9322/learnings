import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDataDto {
  @IsString()
  @IsNotEmpty()
  key!: string;

  @IsString()
  @IsNotEmpty()
  value!: string;
}