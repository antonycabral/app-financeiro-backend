import { UsersService } from './../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private UsersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, pass: string) {
    //busca o usuario pelo email
    const user = await this.UsersService.findByEmail(email);

    //verifica se o usuario existe e se a senha bate
    if (user && (await bcrypt.compare(pass, user.password))) {
      const payload = { sub: user.id, email: user.email };
      return {
        access_token: this.jwtService.sign(payload),
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };
    }

    throw new UnauthorizedException('E-mail ou senha inválidos');
  }
}
