import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['init']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/inicio']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'init',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'perfil',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'asignaturas',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'docentes',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/teachers/teachers.module').then( m => m.TeachersPageModule)
  },
  {
    path: 'estudiantes',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/students/students.module').then( m => m.StudentsPageModule)
  },
  {
    path: 'calendario',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'reuniones',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/meets/meets.module').then( m => m.MeetsPageModule)
  },
  {
    path: 'acudientes',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/attendees/attendees.module').then( m => m.AttendeesPageModule)
  },
  {
    path: 'citaciones',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/citations/citations.module').then( m => m.CitationsPageModule)
  },
  {
    path: 'reportes',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'examenes',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/exams/exams.module').then( m => m.ExamsPageModule)
  },
  {
    path: 'news',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'login/:typeUser',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectLoggedInToHome },
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register/:typeUser',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectLoggedInToHome },
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'init',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectLoggedInToHome },
    loadChildren: () => import('./pages/init/init.module').then( m => m.InitPageModule)
  },
  {
    path: 'recoverpass',
    loadChildren: () => import('./pages/recoverpass/recoverpass.module').then( m => m.RecoverpassPageModule)
  },
  {
    path: 'admin-news',
    loadChildren: () => import('./pages/admin-news/admin-news.module').then( m => m.AdminNewsPageModule)
  },
  {
    path: 'empleados',
    loadChildren: () => import('./pages/employees/employees.module').then( m => m.EmployeesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
