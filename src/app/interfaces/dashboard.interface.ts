export interface Dashboard {
	buttons: DashboardButtons[];
}

export interface DashboardButtons {
	label: string;
	icon?: string;
	routerLink?: string;
	items?: DashboardButtonItems[];
}

export interface DashboardButtonItems {
	label: string;
	icon?: string;
	routerLink: string;
}