import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {IngrediantModel} from "../../shared/ingrediant.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm : NgForm;
  subscription: Subscription;
  editMode=false;
  editedItemIndex: number;
  eidtedItem: IngrediantModel;

  // @ViewChild('nameInput', { static: false })nameInputRef: ElementRef;
  // @ViewChild('amountInput', { static: false })amountInputRef: ElementRef;
  // @Output() ingrediantAdded = new EventEmitter<IngrediantModel>();
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription=this.slService.startedEditing
      .subscribe(
        (index:number) =>{
          this.editedItemIndex = index;
          this.editMode = true;
          this.eidtedItem = this.slService.getIngrediant(index);
          this.slForm.setValue(
            {
              name: this.eidtedItem.name,
              amount: this.eidtedItem.amount
            }
          )
        }
      )

  }

  onAddItem(form: NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    // const newIngrediant = new IngrediantModel(ingName,ingAmount);
    // // this.ingrediantAdded.emit(newIngrediant);
    // this.slService.addIngrediant(newIngrediant);

    //using the forms approach
    const value = form.value;
    const newIngrediant = new IngrediantModel(value.name,value.amount);
    if(this.editMode){
      this.slService.updateIngrediant(this.editedItemIndex, newIngrediant);
    }
    else{
      this.slService.addIngrediant(newIngrediant);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // INorder not to create a memory leak
  }

}
