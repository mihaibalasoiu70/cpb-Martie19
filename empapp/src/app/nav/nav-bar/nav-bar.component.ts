import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from 'src/app/employees/shared/employee.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media(max-width: 1200px) {#searchForm {display: none }}
    li > a.active {color: #F97924; }
  `]
})
export class NavBarComponent implements OnInit {

    searchNav: string;
   // @Output() searchOut = new EventEmitter();

    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
        // this.keyupSubscription = this.keyupSubject
        //     .pipe(
        //         debounceTime(1000)
        //     )
        //     .subscribe(() => this.search());
    }

    // button control
    search() {
        this.employeeService.employeeFilter.next(this.searchNav);

        // this.searchOut.emit(this.searchNav);
    }

    // // keyup event control
    // ngAfterViewInit(): void {
    //     this.navbar.nativeElement.addEventListener('keyup', () => {
    //         // varianta directa
    //          this.search();

    //         // varianta debounce
    //         // this.keyupSubject.next(undefined);
    //     });
    // }

}
