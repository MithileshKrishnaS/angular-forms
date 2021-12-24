import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

   form: FormGroup;
   nameerror=false;
   gender=false;
   co=false;
   ct=false;
   age=false;

    constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      name:['',Validators.required],
      male:[''],
      female:[''],
      country:[''],
      city:[''],
      age:['']
    })
  }



  countries = [
    {id: 1, name: "Australia"},
    {id: 2, name: "Canada"},
    {id: 3, name: "China"},
    {id: 4, name: "India"},
    {id: 5, name: "USA"}
 ];
 cities=[
   {
     id:0,
     name:''
   }
  ]
 selectedCountry:any = null;
 selectedCity:any=null;

  validate()
  {
    console.log(this.form.value.age);
    if(this.form.value.name==='')
    {
      this.nameerror=true;
    }
    if(this.form.value.male===''&&this.form.value.female==='')
    {
      this.gender=true;
    }
    if(this.form.value.country===null)
    {
      this.co=true;
    }
    if(this.form.value.city===null)
    {
      this.ct=true;
    }
    if(this.form.value.age===''&&(this.selectedCountry==="India" || this.selectedCountry==="USA"))
    {
      this.age=true;
    }
    // document.getElementById("s1")?.value;
  }
  selectcity()
  {
    if(this.cities.length>=5 && (this.selectedCountry==="Australia"|| this.selectedCountry==="Canada"||
    this.selectedCountry==="China"|| this.selectedCountry==="India" || this.selectedCountry==="USA"))
    {
      this.cities.pop();
      this.cities.pop();
      this.cities.pop();
      this.cities.pop();
    }
    if(this.selectedCountry==="Australia")
    {
      this.cities.push({id:1,name:"sydney"});
      this.cities.push({id:2,name:"melbourne"});
      this.cities.push({id:3,name:"perth"});
      this.cities.push({id:4,name:"canberra"});
    }
    if(this.selectedCountry==="Canada")
    {
      this.cities.push({id:1,name:"Torrento"});
      this.cities.push({id:2,name:"Montreal"});
      this.cities.push({id:3,name:"Vancouver"});
      this.cities.push({id:4,name:"Ottawa"});
    }
    if(this.selectedCountry==="China")
    {
      this.cities.push({id:1,name:"Beijing"});
      this.cities.push({id:2,name:"Shangai"});
      this.cities.push({id:3,name:"Wuhan"});
      this.cities.push({id:4,name:"Shenzen"});
    }
    if(this.selectedCountry==="India")
    {
      this.cities.push({id:1,name:"New Delhi"});
      this.cities.push({id:2,name:"Chennai"});
      this.cities.push({id:3,name:"Mumbai"});
      this.cities.push({id:4,name:"Kolkata"});
    }
    if(this.selectedCountry==="USA")
    {
      this.cities.push({id:1,name:"New York"});
      this.cities.push({id:2,name:"Washington"});
      this.cities.push({id:3,name:"Florida"});
      this.cities.push({id:4,name:"Detroit"});
    }
    console.log(this.selectedCountry);
    
    //console.log("names");
  }
 

  }
