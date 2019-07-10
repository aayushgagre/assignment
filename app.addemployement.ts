import {Component} from '@angular/core';



@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent {
 // status:boolean=false;
 
 
//empData:any;
pData:any[]=[]
 
pId:any;
 pName:any;
 pCost:any;
 pOption:any;
 pSelect:any;
 pAvilable1:any;
 pAvilable2:any;
 pAvilable3:any;
 pAvilable4:any;
 
 select:any[]=[]
 
 
   
      addEmployee():any{
        
           
                //this.empData={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment} ;
                this.pData.push({pId:this.pId,pName:this.pName,pCost:this.pCost,pOption:this.pOption,pSelect:this.pSelect,pAvilable1:this.pAvilable1})
               
                   
        
      
   }
  
  
   
}