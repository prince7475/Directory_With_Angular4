import { DirectoryComponent } from "./components/directory/directory.component";
import { HomeComponent } from "./components/home/home.component";
import { provideRoutes } from "@angular/router";

const APP_ROUTES = [
    {path: 'directory', component: DirectoryComponent},
    {path: "", component:HomeComponent}
]

export const APP_ROUTES_PROVIDER = [
    provideRoutes(APP_ROUTES)
];