import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import {Token} from "../app.config";

@Injectable()
export class HeaderService {
  constructor(
  ) { }

  createAuthorizationHeader(headers: Headers, tokenId) {
    headers.append('authorization', 'Bearer ' + tokenId);
    headers.append('Content-Type', 'application/json');
  }

  getJWTHeaders(): Headers {
    const headers = new Headers();
    this.createAuthorizationHeader(headers, Token);
    return headers;
  }

  getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
