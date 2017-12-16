import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ManageComponent } from "./components/manage/manage.component";
import { UnivesitylistComponent } from "./components/universitylist/universitylist.component";
import { UniversityComponent } from "./components/university/university.component";
import { AddUniversityComponent } from "./components/addUniversity/adduniversity.component";
import { CartComponent } from "./components/cart/cart.component";
import { AboutComponent } from "./components/about/about.component";

import { UniversitiesComponent } from "./components/universities/universities.component";

const routes: Routes = [
	{
		path: '',
		pathMatch: "full",
		redirectTo: "home"
	},
	{
		path: "home",
		component: HomeComponent,
		children: [
			{
				path: '',
				component: UnivesitylistComponent,
			},
			{
				path: 'university/:id',
				component: UniversityComponent
			},
			{
				path: 'cart',
				component: CartComponent
			},
			{
				path: 'about',
				component: AboutComponent
			}

		]
	},
	{
		path: "manage",
		component: ManageComponent,
		children: [
			{
				path: '',
				component: UniversitiesComponent
			},
			{
				path: 'university/add',
				component: AddUniversityComponent
			},
			{
				path: 'university/add/:universityId',
				component: AddUniversityComponent
			}
		]
	}

]

export const routing = RouterModule.forRoot(routes);
