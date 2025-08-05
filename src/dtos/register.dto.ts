import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName!: string;

  @IsString()
  @MinLength(3)
  @MaxLength(96)
  lastName!: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(96)
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(96)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character',
  })
  @Transform(({ value }) => value.trim())
  password!: string;
}