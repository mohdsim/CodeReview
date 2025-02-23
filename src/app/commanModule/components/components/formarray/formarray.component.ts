import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {

  items = [
    { id: 3, name: 'John', age: 28 },
    { id: 1, name: 'Alice', age: 24 },
    { id: 2, name: 'Bob', age: 32 }
  ];
  
  givenString:string = "Mohd Ahtesham"
  myForm:any
  currentdata:any = new Date()

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    console.log("test-->",this.currentdata)
    // step 1
    this.myForm=this.fb.group({
      fName:[''],
      lName:[''],
      hobbies:this.fb.array([])
    })

   
  }
  // step -2
  get hobbies():FormArray{
    return this.myForm.get('hobbies') as FormArray
  }

  // step-3
  addHobbies(){
    this.hobbies.push(
      this.fb.group({
       abc_:['']
      })
    )
  }

  //step-4
  removeHobbies(index:number){
    this.hobbies.removeAt(index)
  }

  submitHobbies(){
    console.log("val-->",this.myForm.value)
  }
  // *****************
  // export class UserRegComponent {
  //   userForm:any
  //   submitt:boolean=false;
  //   emailPattern ='^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    
  
  //   constructor(
  //     private formBuilder:FormBuilder,
  //     private _loginService:LoginService,
  //     private router:Router){}
      
  //  ngOnInit(): void {
  //     this.userForm = this.formBuilder.group({
  //       userName:[null,[Validators.required]],
  //       email: [null, [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
  //       password:[null,[Validators.required]]
  //      }) }
  
  //   create() {
  //      this.submitt = true;
  //       if (this.userForm.valid) {
  //         console.log("Request Data--->",this.userForm.value)
  //           this.submitt = true;
  //         this._loginService.userLogin(this.userForm.value).subscribe((resp:any)=>{
  //           if(Object.keys(resp?.data).length === 0){
  //               alert(resp?.message)
  //               this.userForm.reset()
  //             }else{
  //               this.router.navigate(['/user-detail',resp?.data]);
  //             }  }  ) }
  //       else { }
  //     }
  
  //    get  userName() { return this.userForm.get('userName') }
  //    get email() { return this.userForm.get('email') }
  //    get password() { return this.userForm.get('password') }
  // }
  // ***************

  sortBy(key: string) {
    this.items = this.sortArray(this.items, key, 'asc');
  }

  sortArray(array: any[], key: string, order: 'asc' | 'desc' = 'asc') {
    return array.sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      if (valueA < valueB) return order === 'asc' ? -1 : 1;
      if (valueA > valueB) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }

}
