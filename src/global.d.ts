/// <reference types="@sveltejs/kit" />

export declare global {
	declare namespace App {
		export interface Session {
			user: string;
		}
	}
}
