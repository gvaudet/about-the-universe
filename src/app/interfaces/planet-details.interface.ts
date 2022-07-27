import { Planet } from "./planet.interface";

export interface PlanetDetails {
    count: number,
	next: string,
	previous: string | null,
	results: Planet[],
}
