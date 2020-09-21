import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from './material/material.module';
import { BadgeComponent } from './badge/badge.component';
import { IconsComponent } from './icons/icons.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { TabsComponent } from './tabs/tabs.component';
import { CardsComponent } from './cards/cards.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { StepperComponent } from './stepper/stepper.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SnackbarComponent, CustomSnackBarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    BadgeComponent,
    IconsComponent,
    ProgressSpinnerComponent,
    ToolbarComponent,
    MenuComponent,
    TooltipComponent,
    ListComponent,
    GridListComponent,
    TabsComponent,
    CardsComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    DatatableComponent,
    ButtonToggleComponent,
    SidenavComponent,
    ExpansionPanelComponent,
    StepperComponent,
    AutocompleteComponent,
    DatepickerComponent,
    SnackbarComponent,
    CustomSnackBarComponent,
    DialogComponent,
    DialogExampleComponent,
    VirtualScrollingComponent,
    FormComponent
  ],
  entryComponents: [CustomSnackBarComponent, DialogExampleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
