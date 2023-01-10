import { UserService } from 'src/app/service/User.service';
import { GenerateService } from 'src/app/service/generate.service';
import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
    nUsuarios: number = 0;
    bLoading:boolean=false;
    strResult: string = "";

  constructor(
    public oGenerateService: GenerateService,
    public oMetadataService: MetadataService,
    public oUserService: UserService
  ) {

  }

  ngOnInit(): void {
    this.getCount();
  }

  generateUsuarios(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateUsuarios(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " usuarios";
        this.bLoading=false;
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
      })
  }

  eventsModalSubject: Subject<string> = new Subject<string>();

  getCount(): void{
    this.oUserService.getCountUsuarios().subscribe((n: number) => this.nUsuarios = n);
  }

}