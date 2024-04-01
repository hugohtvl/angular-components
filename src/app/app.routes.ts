import { Routes } from '@angular/router';
import { userProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  { path: 'user', component: userProfileComponent },
  { path: '', component: userProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
];
