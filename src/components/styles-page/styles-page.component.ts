import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ResizeBgImageDirective } from '../../directives/resize-bg-image.directive';
import StylesProps from '../../models/bg.props';
import { StyleMap, showTypeStyle } from '../../utilitys/styles.utility';

@Component({
  selector: 'app-styles-page',
  standalone: true,
  templateUrl: './styles-page.component.html',
  styleUrls: ['./styles-page.component.css'],
  imports: [ResizeBgImageDirective, CommonModule],
})
export class StylesPageComponent implements OnInit {
  bg!: StylesProps;
  // TODO transformar em props
  url = `url(https://images.pexels.com/photos/19078659/pexels-photo-19078659/free-photo-of-ponto-de-referencia-ponto-historico-predios-edificios.jpeg?auto=compress&cs=tinysrgb)`;
  constructor() {}

  styles = {};
  ngOnInit() {
    this.bg = {
      backgroundRepeat: 'no-repeat',
      backgroundImage: `${this.url}`,
      height: '100vh',
      resize: 'both',
      minHeight: '100%',
    };

    this.styles = showTypeStyle({ background: '#8257e5', color: '#fff' });
  }
}
