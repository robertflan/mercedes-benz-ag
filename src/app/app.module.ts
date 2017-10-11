import {
    NgModule
 } from '@angular/core';
 
 import {
    BrowserModule
 } from '@angular/platform-browser';
 
 import {
    AppComponent
 } from './app.component';
 
 import {
    MultiplierPipe
 } from './multiplier.pipe'
 
 @NgModule ({
    imports: [BrowserModule],
    declarations: [AppComponent, MultiplierPipe],
    bootstrap: [AppComponent]
 })
 
 export class AppModule {}