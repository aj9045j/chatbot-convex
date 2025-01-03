export interface ChatSession {
  session_id: string;
  message: string;
}

export interface ChatResponse {
  response: string;
}

const API_BASE_URL = 'https://llm-webhook-1028888047283.us-central1.run.app';

export async function initializeChat(agent_name: string, agent_id: string): Promise<ChatSession> {
  const response = await fetch(`${API_BASE_URL}/initial_message`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ 
      agent_name, 
      agent_id,
      user_name: 'Guest User',
      user_email: 'guest@smartbotics.com',
      context: 'landscaping_services'
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(`Failed to initialize chat session: ${errorData}`);
  }

  return response.json();
}

export async function sendMessage(
  query: string,
  session_id: string,
  agent_id: string
): Promise<ChatResponse> {
  const formData = new FormData();
  formData.append('query', query);
  formData.append('agent_id', agent_id);
  formData.append('context', 'landscaping_services');

  const response = await fetch(`${API_BASE_URL}/chat_agent_response`, {
    method: 'POST',
    headers: {
      'Session-Id': session_id,
      'Accept': 'application/json'
    },
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(`Failed to send message: ${errorData}`);
  }

  return response.json();
}

export async function sendAudioMessage(
  audioBlob: Blob,
  session_id: string,
  agent_id: string
): Promise<ChatResponse> {
  const formData = new FormData();
  formData.append('audio_file', audioBlob, 'audio.wav');
  formData.append('agent_id', agent_id);
  formData.append('context', 'landscaping_services');

  const response = await fetch(`${API_BASE_URL}/chat_agent_response`, {
    method: 'POST',
    headers: {
      'Session-Id': session_id,
      'Accept': 'application/json'
    },
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(`Failed to send audio message: ${errorData}`);
  }

  return response.json();
}