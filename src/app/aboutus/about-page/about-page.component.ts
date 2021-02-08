import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AboutusService } from './../../core/services/aboutus/aboutus.service';
import { HeaderService } from 'src/app/core/services/blog/headerService';


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  private req: any;
  private routeSub:any;
  about: any;
  id:number;
  darkTheme: boolean = true;

  constructor(
            private route: ActivatedRoute, 
            private aboutusService:AboutusService,
            private headerService: HeaderService
            ) {
    this.getContact();
   }

  getContact = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.req = this.aboutusService.getOne(1).subscribe(data=>{
        this.about = data.about as any
      })
  })
  }
  ngOnInit(): void {
    this.headerService.sendHasDarkTheme(this.darkTheme);
  }

}
