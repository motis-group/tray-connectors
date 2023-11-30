export type GetAllTextsInput = {
	page?: number;
	per_page?: number;
	sort?: string;
	order?: string;
	from_datetime?: string;
	to_datetime?: string;
	contact_number?: string;
	justcall_number?: string;
	sms_direction?: string;
	sms_content?: string;
};