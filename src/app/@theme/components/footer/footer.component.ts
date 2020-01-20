import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b><a href="https://github.com/josedavidb" target="_blank">José Basanta</a></b> 2020</span>
    <div class="socials">
      <a href="https://github.com/josedavidb" target="_blank" class="ion ion-social-github"></a>
      <a href="https://twitter.com/josedavidb" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/jose-basanta-9129b4a5/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
