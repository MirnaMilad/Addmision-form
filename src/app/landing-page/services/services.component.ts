import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
services:{}[]=[
  {
    name:"SOCIAL MEDIA",
    color:"#fdefe6"
  },
  {
    name:"WEB DEVELOPMENT",
    color:"#ceebe9"
  },
  {
    name:"MOBILE APPS",
    color:"#e2f2b2"
  },
  {
    name:"SEO OPTIMIZATION",
    color:"#d6e5fb"
  },
  {
    name:"INFLUENCERS MARKETING",
    color:"#ffd9ff"
  },
  {
    name:"SMS CAMPAIGNS",
    color:"rgb(255 206 210)"
  },
  {
    name:"MEDIA PRODUCTION",
    color:"#ffffc1"
  }]
}
