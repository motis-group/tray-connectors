export type GetAllCallsInput = {
	fetch_queue_data?: boolean;
	fetch_iq_data?: boolean;
	page?: number;
	per_page?: number;
	sort?: string;
	order?: string;
	from_datetime?: string;
	to_datetime?: string;
	contact_number?: number;
	justcall_number?: number;
	agent_id?: number;
	ivr_digit?: number;
	call_direction?: string;
	call_type?: string;
};
