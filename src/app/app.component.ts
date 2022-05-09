import {Component} from '@angular/core';
import {Pokemon} from "./models/pokemon";
import {Services} from "./services/services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly services: Services = new Services();

  public flipOrder() {
    this.isDescending = !this.isDescending;
  }

  public isDescending: boolean = false;

  public getOrder(): string {
    if (this.isDescending) return 'Ascending';
    else return 'Descending';
  }

  public page: number = 0;

  public next() {
    if (this.pokemon.length >= 10) this.page++;
  }

  public prev() {
    if (this.page > 0) this.page--;
  }

  get pokemon(): Pokemon[] {
    return this.services.get(this.isDescending, this.page, this.filter);
  }

  public showTypes: boolean = false;

  public show() {
    this.showTypes = !this.showTypes;
  }

  public getFilterText(): string {
    if (this.showTypes) {
      return 'Filter◂';
    } else return 'Filter▸';
  }

  public filter: number = 0;

  public changeFilter(type: number) {
    this.filter = type;
  }
}
