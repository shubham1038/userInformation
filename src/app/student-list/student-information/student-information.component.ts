import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit {

  public studentId;
  constructor(private router: Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    //let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.activatedRoute.paramMap
                  .subscribe((param :ParamMap)=> {
                    let id = parseInt(param.get('id'))
                    this.studentId =id;
                  });
    
  }

  moveBack() :void{
    let selectedId = this.studentId;
    //this.router.navigate(['student-details',{id: selectedId}]);
    this.router.navigate(['../',{id: selectedId}], {relativeTo:this.activatedRoute});
  }

  goPrevious(): void{
    let previousId = this.studentId -1; 
    this.router.navigate(['student/student-details', previousId])
  }

  goNext(): void{
    let nextId = this.studentId +1;
    this.router.navigate(['student/student-details', nextId])
  }

  nextToInterceptor() : void{
    this.router.navigate(['../../interceptor'], {relativeTo: this.activatedRoute})
  }
}
