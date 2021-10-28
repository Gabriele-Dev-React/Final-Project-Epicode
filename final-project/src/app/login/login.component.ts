import { ClientiService } from './../services/clienti.service';
import { Router } from '@angular/router';
import { SecurityService } from './../services/security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login: any ={
  username : '',
  password : ''} 

  



  constructor(
    /* private routeGuardService: RouteGuardService; */
    private clientiservice: ClientiService,
    private securityService: SecurityService,
    private router: Router,
    
    ) { 
    
  }

  ngOnInit(): void {
  }
  
  loginCliente(){
       this.clientiservice.postLogin(this.login).subscribe(resp => {
      console.log(resp)
      this.securityService.loginUtente(resp); 
      this.router.navigate(['/home']);
      }
       )
  }
   /*  this.securityService.loginUtente(this.email, /* this.password  );
     

     this.securityService.loginUtente(this.login);
    this.router.navigate(['/clienti']); */
 
  

}
