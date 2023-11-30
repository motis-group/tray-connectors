export type GetTextOutput = {
	status: string,
	data: {
		id: number,
		contact_number: string,
		contact_name: string,
		contact_email: string,
		justcall_number: string,
		justcall_line_name: string,
		agent_id: number,
		agent_name: string,
		agent_email: string,
		sms_date: string,
		sms_user_date: string,
		sms_time: string,
		sms_user_time: string,
		direction: string,
		cost_incurred: number,
		sms_info: {
			body: string,
			is_mms: number,
			mms: Array<object>
		},
		delivery_status: string,
		is_deleted: boolean,
		medium: string
	}
}