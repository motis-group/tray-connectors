export type GetAllTextsObject = {
	id: number,
	contact_number: string,
	contact_name: string,
	justcall_number: string,
	justcall_line_name: string,
	agent_id: number,
	agent_name: string,
	sms_date: string,
	sms_user_date: string,
	sms_time: string,
	sms_user_time: string,
	direction: string,
	cost_incurred: number,
	sms_info: {
		body: string,
		is_mms: string,
		mms: {
			media_url: string,
			content_type: string
		}[]
	},
	delivery_status: string,
	is_deleted: string
}

export type GetAllTextsOutput = {
	status: string,
	count: number,
	total_count: number,
	current_page: number,
	per_page: number,
	next_page_link: string,
	prev_page_link: string,
	data: GetAllTextsObject[]
};