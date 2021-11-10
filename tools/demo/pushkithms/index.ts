import { Component } from "@angular/core";
import { DemoSharedBase } from '../utils';
import {  } from '@hms-plugin/pushkithms';
import { initWebViewWithCallback } from "./web-view-callback/web-view-callback.android";

export class DemoSharedPushkithms extends DemoSharedBase {
  message: string = "";

  constructor() {
    super();
    console.log('Plugin starting!');
  }

  onWebViewLoaded(args) {
    console.log('test pushkithms - '+args);
    // initWebViewWithCallback(args.object, this.postMessage.bind(this));
  }

  testIt() {
    console.log('test pushkithms!');
    
  }

  postMessage() {
    console.log('test postmsg');
    initWebViewWithCallback(null, this.postMessage.bind(this));
  }
}