import { Controller, Get, Post, Req, Res } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @Post()
  postUsers() {}

  @Post('login')
  logIn(@Req() req) {
    req.user;
  }

  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
  }
}
