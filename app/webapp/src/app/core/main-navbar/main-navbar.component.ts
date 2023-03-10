import {Component} from '@angular/core';
import {UserService} from '../auth/service/user.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Role} from '../auth/constants/role';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
})
export class MainNavbarComponent {
  /**
   * The app title.
   */
  appTitle = environment.appTitle;
  showArticleCategoriesActionButton: boolean;

  /**
   * Create a new instance.
   *
   * @param userService The service to manage users
   * @param router The router
   */
  constructor(private readonly userService: UserService, private readonly router: Router) {
    this.showArticleCategoriesActionButton = this.userService.hasRoles([
      Role.READ_ARTICLE_CATEGORY,
      Role.SEARCH_ARTICLE_CATEGORY,
    ]);
  }

  /**
   * Perform a login.
   */
  login(): void {
    if (!UserService.isAuthenticated) {
      this.userService.login(window.location.origin + this.router.routerState.snapshot.url);
    }
  }

  /**
   * Perform a logout.
   */
  logout(): void {
    if (UserService.isAuthenticated) {
      this.userService.logout(window.location.origin);
    }
  }
}
