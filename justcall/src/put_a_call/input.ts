export type PutCallInput = {
	id: number;
	notes: string; // Updated notes for the call. Existing notes will be erased and the new notes will be added in place.
	disposition_code: string; // New/ updated disposition of the call. This can only be chosen from the options created by the admin.
	rating: number; // New/ updated rating for the call. Ratings should be from 0 to 5 and can contain a 0.5 decimal. Ratings like 2.5, 4.5 are allowed while ratings like 2.3, 4.6 are not allowed.
};
