export type GetAllCallsObject = {
	id: number;
	contact_number: string;
	contact_name: string;
	justcall_number: string;
	justcall_line_name: string;
	agent_id: number;
	agent_name: string;
	agent_email: string;
	agent_active: string;
	call_date: string;
	call_user_date: string;
	call_time: string;
	call_user_time: string;
	cost_incurred: number;
	call_info: {
		direction: string;
		type: string;
		missed_call_reason: string;
		status: string;
		disposition: string;
		notes: string;
		rating: string;
		recording: string;
		recording_child: string;
		call_traits: string[];
	};
	call_duration: {
		ring_time: number;
		friendly_duration: string;
		total_duration: number;
		queue_wait_time: number;
		hold_time: number;
		conversation_time: number;
		wrap_up_time: number;
		handle_time: number;
	};
	queue_callback: {
		callback_requested: string;
		callback_requested_time: string;
		callback_attempted: string;
		callback_attempted_time: string;
		callback_reached: string;
		callback_status: string;
		callback_wait_duration: string;
		callback_reached_time: string;
		callback_reached_duration: string;
	};
	ivr_info: {
		digit_pressed: string;
		content: string;
	};
	justcall_iq: {
		call_moments: string[];
		customer_sentiment: string;
		call_score: number;
		call_score_parameters: {
			dead_air_time: number;
			filler_word: number;
			de_escalation: number;
			empathy: number;
			talk_listen_ratio: number;
			greetings: number;
			words_per_minute: number;
			monologue_duration: number;
			call_etiquette: number;
			customer_sentiment_score: number;
		};
		tags: string[];
		manual_call_score: number;
		call_transcription: string[];
		call_summary: string;
	};
};

export type GetAllCallsOutput = {
	status: string;
	count: number;
	total_count: number;
	current_page: number;
	per_page: number;
	next_page_link: string;
	prev_page_link: string;
	data: GetAllCallsObject[];
};
